import {ErrorHandler, NgModule} from '@angular/core';
import {Environment} from './abstract-environment';
import {EnvironmentImpl} from './environment';


@NgModule({
    providers: [
        {provide: Environment, useClass: EnvironmentImpl},
        {provide: ErrorHandler, useClass: EnvironmentImpl},
    ]
})
export class EnvironmentModule {
}
