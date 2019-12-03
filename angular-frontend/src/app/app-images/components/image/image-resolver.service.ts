import {Injectable} from '@angular/core';
import {Image} from '../../../../domains/image/image';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {EMPTY, Observable, zip} from 'rxjs';
import {ImageNetworkRepositoryService} from '../../../../domains/image/image-network-repository.service';
import {catchError, flatMap, map, tap} from 'rxjs/operators';
import {AnnotationType} from '../../../../domains/annotation-type/annotation-type';
import {AnnotationTypeService} from '../../../../domains/annotation-type/annotation-type.service';


export interface ImagesData {
    image: Image;
    annotationTypes: AnnotationType[];
}


@Injectable({
    providedIn: 'root'
})
export class ImageResolverService implements Resolve<ImagesData> {

    constructor(private imagesService: ImageNetworkRepositoryService, private atService: AnnotationTypeService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ImagesData> {
        return zip(
            this.resolveImage(route),
            this.resolveAnnotationTypes()
        ).pipe(
            map(value => {
                return {
                    image: value[0],
                    annotationTypes: value[1]
                } as ImagesData;
            })
        );
    }

    private resolveImage(route: ActivatedRouteSnapshot): Observable<Image> {
        const id = route.paramMap.get('imageId');
        if (+id) {
            return this.imagesService.read(+id).pipe(
                catchError(flatMap(value => {
                    this.router.navigate(['/404']);
                    return EMPTY;
                })));
        } else {
            this.router.navigate(['/404']);
            return EMPTY;
        }
    }

    private resolveAnnotationTypes(): Observable<AnnotationType[]> {
        return this.atService.list();
    }
}
