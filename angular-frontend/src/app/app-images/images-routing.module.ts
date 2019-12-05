import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AllImageSetsResolver} from '../../domains/imageset/resolvers/all-image-sets-resolver.service';


const routes: Routes = [
    {
        path: 'sets', pathMatch: 'prefix', children: [
            {path: ':visibleSet', pathMatch: 'full', component: HomeComponent, resolve: {allImagesets: AllImageSetsResolver}},

            {path: '', pathMatch: 'full', redirectTo: 'pinned'}
        ]
    },
    {path: '', pathMatch: 'full', redirectTo: 'sets'},

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
