import {Injectable} from '@angular/core';
import {Environment} from '../../environments/abstract-environment';

@Injectable({
    providedIn: 'root'
})
export class SessionStorageService {

    constructor(protected environment: Environment) {
    }

    private convertKey(key: string): string {
        return `${this.environment.sessionStoragePrefix}${key}`;
    }

    public getItem<T>(key: string): T | null {
        if (sessionStorage.getItem(this.convertKey(key)) != null) {
            return JSON.parse(sessionStorage.getItem(this.convertKey(key))) as T;
        }
        return null;
    }

    public setItem(key: string, item: any) {
        sessionStorage.setItem(this.convertKey(key), JSON.stringify(item));
    }

    public removeItem(key: string) {
        sessionStorage.removeItem(this.convertKey(key));
    }

    public clear() {
        sessionStorage.clear();
    }
}
