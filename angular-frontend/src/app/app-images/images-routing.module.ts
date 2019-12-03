import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AuthenticatedUserResolver} from './resolvers/authenticated-user-resolver.service';
import {OwnTeamsResolver} from './resolvers/own-teams-resolver.service';


const routesWithGlobalData: Routes = [
    {path: 'sets', pathMatch: 'prefix', component: HomeComponent}
];


const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'sets'},
    {
        path: '', pathMatch: 'prefix', children: routesWithGlobalData, resolve: {
            authenticatedUser: AuthenticatedUserResolver,
            ownTeams: OwnTeamsResolver
        }
    },

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
