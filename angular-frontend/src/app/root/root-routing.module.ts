import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from '../error-display/page-not-found/page-not-found.component';
import {LoginComponent} from '../auth/login/login.component';
import {OwnUserResolver} from '../../domains/user/resolvers/own-user-resolver.service';
import {OwnTeamsResolver} from '../../domains/team/resolvers/own-teams-resolver.service';


const routesWithGlobalData: Routes = [
    {path: 'images', loadChildren: 'src/app/app-images/images.module#ImagesModule'},
    {path: 'login', component: LoginComponent},

    {path: '', pathMatch: 'full', redirectTo: 'images'},
];


const routes: Routes = [
    {
        path: '', pathMatch: 'prefix', children: routesWithGlobalData, resolve: {
            authenticatedUser: OwnUserResolver,
            ownTeams: OwnTeamsResolver
        }
    },

    {path: '*', component: PageNotFoundComponent},
    {path: '404', component: PageNotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RootRoutingModule {
}
