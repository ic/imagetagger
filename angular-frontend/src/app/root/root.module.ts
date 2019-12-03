import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RootComponent} from './root/root.component';
import {RootRoutingModule} from './root-routing.module';
import {EnvironmentModule} from '../../environments/environment.module';
import {NavbarModule} from '../navbar/navbar.module';
import {ErrorDisplayModule} from '../error-display/error-display.module';
import {AuthModule} from '../auth/auth.module';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {CachingHttpModule} from '../../infrastructure/network.caching-http/caching-http.module';


@NgModule({
    declarations: [
        RootComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        // CachingHttpModule,
        EnvironmentModule,
        RootRoutingModule,
        AuthModule,
        NavbarModule,
        ErrorDisplayModule,
    ],
    bootstrap: [RootComponent]
})
export class RootModule {
}
