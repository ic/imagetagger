// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import {Environment} from './abstract-environment';
import {enableProdMode} from '@angular/core';


export class DevEnvironment extends Environment {
    production = false;
    apiUrl = 'http://localhost:8000/api/';
    mediaUrl = 'http://localhost:8000/';
    localStoragePrefix = 'imagetagger-dev';
    sessionStoragePrefix = 'imagetagger-dev';

    handleError(error: any): void {
        if (error.toString() !== '[object Object]') {
            console.error(error.toString());
        } else {
            console.error(error);
        }
    }

    onAppLoad(): void {
        enableProdMode();
    }
}

export const EnvironmentImpl = DevEnvironment;
