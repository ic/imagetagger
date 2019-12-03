import {ErrorHandler} from '@angular/core';


export abstract class Environment implements ErrorHandler {
    abstract production: boolean;
    abstract apiUrl: string;
    abstract mediaUrl: string;
    abstract sessionStoragePrefix: string;
    abstract localStoragePrefix: string;

    abstract onAppLoad(): void;

    /**
     * @inheritDoc
     */
    abstract handleError(error: any): void;
}
