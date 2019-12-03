import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImagesRoutingModule} from './images-routing.module';
import {ListImagesetsComponent} from './components/home/list-imagesets/list-imagesets.component';
import {HomeComponent} from './components/home/home.component';
import {ImagesetComponent} from './components/imageset/imageset.component';
import {CreateTeamComponent} from './components/home/create-team/create-team.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ImageComponent} from './components/image/image.component';
import {ListImagesComponent} from './components/list-images/list-images.component';
import {AnnotationTypeConfigComponent} from './components/image/annotation-type-config/annotation-type-config.component';
import {AnnotatableDirective} from './components/image/annotatable/annotatable.directive';


@NgModule({
    declarations: [
        ListImagesetsComponent,
        HomeComponent,
        ImagesetComponent,
        CreateTeamComponent,
        ImageComponent,
        ListImagesComponent,
        AnnotationTypeConfigComponent,
        AnnotatableDirective
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ImagesRoutingModule
    ],
    exports: []
})
export class ImagesModule {
}
