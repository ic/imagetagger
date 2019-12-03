import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {CommonModule} from '@angular/common';
import {UserModule} from '../../domains/user/user.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpAuthInterceptor} from './auth.interceptor';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UserModule,
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true},
    ]
})
export class AuthModule {
}
