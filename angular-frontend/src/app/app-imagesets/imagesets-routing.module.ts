import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {AllImageSetsResolver} from '../../domains/imageset/resolvers/all-image-sets-resolver.service';
import {OwnUserResolver} from '../../domains/user/resolvers/own-user-resolver.service';
import {OwnTeamsResolver} from '../../domains/team/resolvers/own-teams-resolver.service';
import {ImagesetComponent} from './components/imageset/imageset.component';


const routes: Routes = [
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

    {path: '', redirectTo: 'list'},
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ImagesetsRoutingModule {
}
