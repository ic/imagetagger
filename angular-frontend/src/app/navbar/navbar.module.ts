import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {AuthModule} from '../auth/auth.module';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [NavbarComponent],
    exports: [
        NavbarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ]
})
export class NavbarModule { }
