import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {AuthModule} from '../auth/auth.module';

@NgModule({
    declarations: [NavbarComponent],
    exports: [
        NavbarComponent
    ],
    imports: [
        CommonModule,
    ]
})
export class NavbarModule { }
