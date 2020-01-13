import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImagesRoutingModule} from './images-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ImageComponent} from './components/image/image.component';
import {ListImagesComponent} from './components/list-images/list-images.component';
import {AnnotationConfigComponent} from './components/image/annotation-config/annotation-config.component';
import {AnnotatableDirective} from './components/image/annotatable/annotatable.directive';
import { AnnotationMetadataComponent } from './components/annotation-metadata/annotation-metadata.component';


@NgModule({
    declarations: [
        ImageComponent,
        ListImagesComponent,
        AnnotationConfigComponent,
        AnnotatableDirective,
        AnnotationMetadataComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ImagesRoutingModule
    ],
    exports: [
        ListImagesComponent
    ]
})
export class ImagesModule {
}
