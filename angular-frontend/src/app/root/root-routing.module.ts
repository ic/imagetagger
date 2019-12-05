import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from '../error-display/page-not-found/page-not-found.component';
import {LoginComponent} from '../auth/login/login.component';


const routes: Routes = [
    {path: 'imagesets', loadChildren: 'src/app/app-imagesets/imagesets.module#ImagesetsModule'},
    {path: 'login', component: LoginComponent},

    {path: '', pathMatch: 'full', redirectTo: 'imagesets'},

    {path: '*', component: PageNotFoundComponent},
    {path: '404', component: PageNotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RootRoutingModule {
}
