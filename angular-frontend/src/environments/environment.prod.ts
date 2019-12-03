import {Environment} from './abstract-environment';


export class ProdEnvironment extends Environment {
    production: true;
    apiUrl = null;    // TODO setup production Urls
    mediaUrl = null;
    localStoragePrefix = 'imagetagger';
    sessionStoragePrefix = 'imagetagger';

    handleError(error: any): void {
        if (error.toString() !== '[object Object]') {
            console.error(error.toString());
        } else {
            console.error(error);
        }
    }

    onAppLoad(): void {
    }
}

export const EnvironmentImpl = ProdEnvironment;
