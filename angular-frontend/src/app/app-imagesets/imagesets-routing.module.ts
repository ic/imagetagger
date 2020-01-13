import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {AllImageSetsResolver} from '../../domains/imageset/resolvers/all-image-sets-resolver.service';
import {OwnUserResolver} from '../../domains/user/resolvers/own-user-resolver.service';
import {OwnTeamsResolver} from '../../domains/team/resolvers/own-teams-resolver.service';
import {ImagesetComponent} from './components/imageset/imageset.component';
import {ImagesetResolver} from '../../domains/imageset/resolvers/imageset-resolver.service';
import {ImagesetChildTeamResolver} from '../../domains/imageset/resolvers/imageset-child-team-resolver.service';
import {ImagesetChildCreatorResolver} from '../../domains/imageset/resolvers/imageset-child-creator-resolver.service';
import {ImagesetChildImagesResolver} from '../../domains/imageset/resolvers/imageset-child-images-resolver.service';


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
            {
                path: '', pathMatch: 'full', component: ImagesetComponent, resolve: {
                    imageset: ImagesetResolver,
                    team: ImagesetChildTeamResolver,
                    creator: ImagesetChildCreatorResolver,
                    images: ImagesetChildImagesResolver,
                }
            },
            {path: 'image', loadChildren: 'src/app/app-images/images.module#ImagesModule'}
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
