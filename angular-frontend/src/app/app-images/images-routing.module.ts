import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ImageComponent} from './components/image/image.component';
import {CanDeactivateComponentGuard} from '../../infrastructure/angular.can-deactivate-component/guards/can-deactivate-component.guard';
import {ImagesetResolver} from '../../domains/imageset/resolvers/imageset-resolver.service';
import {ImagesetChildImagesResolver} from '../../domains/imageset/resolvers/imageset-child-images-resolver.service';
import {AllAnnotationTypesResolver} from '../../domains/annotation-type/resolvers/all-annotation-types-resolver.service';


const routes: Routes = [
    {
        path: ':imageId',
        pathMatch: 'full',
        component: ImageComponent,
        canDeactivate: [CanDeactivateComponentGuard],
        resolve: {
            imageset: ImagesetResolver,
            images: ImagesetChildImagesResolver,
            annotationTypes: AllAnnotationTypesResolver,
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ImagesRoutingModule {
}
