import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImagesetsRoutingModule} from './imagesets-routing.module';
import {HomeComponent} from './components/home/home.component';
import {CreateTeamComponent} from './components/create-team/create-team.component';
import {ImagesetComponent} from './components/imageset/imageset.component';
import {ListImagesetsComponent} from './components/list-imagesets/list-imagesets.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ImagesModule} from '../app-images/images.module';


@NgModule({
    declarations: [
        HomeComponent,
        CreateTeamComponent,
        ImagesetComponent,
        ListImagesetsComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ImagesetsRoutingModule,
        ImagesModule,
    ]
})
export class ImagesetsModule {
}
