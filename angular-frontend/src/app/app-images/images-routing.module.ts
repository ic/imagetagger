import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AllImageSetsResolver} from '../../domains/imageset/resolvers/all-image-sets-resolver.service';
import {OwnUserResolver} from '../../domains/user/resolvers/own-user-resolver.service';
import {OwnTeamsResolver} from '../../domains/team/resolvers/own-teams-resolver.service';
import {ImagesetComponent} from './components/imageset/imageset.component';


const routes: Routes = [
    {
        path: 'imagesets', children: [
            {
                path: 'list', children: [
                    {
                        path: ':visibleSet', pathMatch: 'full', component: HomeComponent, resolve: {
                            allImagesets: AllImageSetsResolver,
                            authenticatedUser: OwnUserResolver,
                            ownTeams: OwnTeamsResolver
                        }
                    },

                    {path: '', pathMatch: 'full', redirectTo: 'pinned'}
                ]

            },

            {
                path: ':imagesetId', children: [
                    {path: '', pathMatch: 'full', component: ImagesetComponent}
                ]
            },

            {path: '', pathMatch: 'full', redirectTo: 'list'}
        ]
    },
    {path: '', pathMatch: 'full', redirectTo: 'imagesets'},

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
