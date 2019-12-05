import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
    /*
    {
        path: ':visibleSet', pathMatch: 'full', component: HomeComponent, resolve: {
            homeData: HomeResolverService
        }
    },
    {
        path: 'imagesets/:imagesetId', pathMatch: 'full', component: ImagesetComponent, resolve: {
            imageSetData: ImagesetResolverService,
        }
    },
    {
        path: 'imagesets/:imagesetId/image/:imageId',
        pathMatch: 'full',
        component: ImageComponent,
        canDeactivate: [CanDeactivateComponentGuard],
        resolve: {
            imageSetData: ImagesetResolverService,
            imagesData: ImageResolverService,
        },
    }
     */
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ImagesRoutingModule {
}
