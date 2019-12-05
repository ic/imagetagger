import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ImagesData} from './image-resolver.service';
import {Imageset} from '../../../../domains/imageset/imageset';
import {AnnotationInImage, Image} from '../../../../domains/image/image';
import {FormControl} from '@angular/forms';
import {AnnotationType} from '../../../../domains/annotation-type/annotation-type';
import {AnnotationNetworkRepositoryService} from '../../../../domains/annotation/annotation-network-repository.service';
import {AnnotationConfigData} from './annotation-type-config/annotation-type-config.component';
import {AnnotatableDirective, PrematureAnnotation} from './annotatable/annotatable.directive';
import {AnnotationVector} from '../../../../domains/annotation/annotation';
import {CanComponentDeactivate} from '../../../guards/can-deactivate-component.guard';
import {Observable} from 'rxjs';
import {DialogService} from '../../../services/dialog.service';
import {Environment} from '../../../../environments/abstract-environment';


@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit, CanComponentDeactivate {

    protected imageset: Imageset;
    protected image: Image;
    protected annotationTypes: AnnotationType[];

    protected keepAnnotationForNextImage = new FormControl(true);
    protected visibleAnnotations: AnnotationInImage[] = [];

    protected annotationConfigData: AnnotationConfigData;
    protected prematureAnnotation: PrematureAnnotation;

    @ViewChild(AnnotatableDirective)
    protected annotatableDirective: AnnotatableDirective;

    constructor(private environment: Environment, private route: ActivatedRoute, private router: Router,
                private annotationService: AnnotationNetworkRepositoryService, private dialog: DialogService) {
    }

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.image = data.imagesData.image;
            this.annotationTypes = data.imagesData.annotationTypes;
            this.imageset = data.imageSetData.set;
            this.visibleAnnotations = [];
        });
    }

    /**
     * Find the AnnotationType object based on its fields
     *
     * All given parameters must match but those left out are ignored.
     */
    protected findAnnotationType(id?: number, name?: string): AnnotationType {
        return this.annotationTypes.find(at => {
            // Return false if no parameter was given at all
            if (!id && !name) {
                return false;
            }

            // Evaluate each given parameter
            let result = true;
            if (id) {
                result = result && at.id === id;
            }
            if (name) {
                result = result && at.name === name;
            }
            return result;
        });
    }

    /**
     * Convert an AnnotationVector to an Iterable because *ngFor needs that
     */
    protected annotationVectorToIterable(vector: AnnotationVector): { key: string, value: string }[] {
        const result: { key: string, value: string }[] = [];

        for (const i in vector) {
            if (vector.hasOwnProperty(i)) {
                result.push({key: i.toString(), value: vector[i].toString()});
            }
        }

        return result;
    }

    /**
     * Delete the annotation with the provided ID and update `this.image.annotations`.
     */
    protected actDeleteAnnotation(id: number) {
        this.annotationService.delete(id).subscribe(result => {
            if (result) {
                this.image.annotations = this.image.annotations.filter(a => a !== id);
                this.visibleAnnotations = this.visibleAnnotations.filter(a => a.id !== id);
            }
        });
    }

    /**
     * Find the index of `this.image` inside `this.imageset.images`
     *
     * This special method is needed because the two values are slightly different (with same id) which makes `.indexOf()` unusable
     */
    protected indexOfImageInImageset(): number {
        let index = -1;

        this.imageset.images.find((value, iIndex) => {
            if (value === this.image.id) {
                index = iIndex;
                return true;
            }
            return false;
        });

        return index;
    }

    protected getNextImageUrl(): string {
        const i = this.indexOfImageInImageset();
        if (i !== -1 && i + 1 < this.imageset.images.length) {
            return `../${this.imageset.images[i + 1]}`;
        }
        return '';
    }

    protected getPrevImageUrl(): string {
        const i = this.indexOfImageInImageset();
        if (i !== -1 && i - 1 >= 0) {
            return `../${this.imageset.images[i - 1]}`;
        }
        return '';
    }

    /**
     * Save the current premature-annotation
     */
    protected actSave() {
        if (this.prematureAnnotation) {
            this.annotationService.create(this.prematureAnnotation).subscribe(result => {
                this.annotatableDirective.reset();
                this.image.annotations.push(null); // TODO fix
            });
        }
    }

    /**
     * Toggle the visibility of an existing annotation
     */
    protected actToggleVisibility(annotation: AnnotationInImage) {
        if (this.visibleAnnotations.includes(annotation)) {
            this.visibleAnnotations = this.visibleAnnotations.filter(a => a.id !== annotation.id);
        } else {
            this.visibleAnnotations = this.visibleAnnotations.concat([annotation]);
        }
    }

    /**
     * This component can deactivate if no component is currently being drawn
     */
    canDeactivate(): Observable<boolean> | boolean {
        return this.prematureAnnotation !== null && this.prematureAnnotation.vector !== null
            ? this.dialog.confirm('You have an unsaved annotation')
            : true;
    }
}
