import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from '../error-display/page-not-found/page-not-found.component';
import {LoginComponent} from '../auth/login/login.component';


const routes: Routes = [
    {path: 'images', loadChildren: 'src/app/app-images/images.module#ImagesModule'},
    {path: 'login', component: LoginComponent},

    {path: '', pathMatch: 'full', redirectTo: 'images'},

    {path: '*', component: PageNotFoundComponent},
    {path: '404', component: PageNotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RootRoutingModule {
}
