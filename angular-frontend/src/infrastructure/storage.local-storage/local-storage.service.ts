import {Injectable} from '@angular/core';
import {Environment} from '../../environments/abstract-environment';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(protected environment: Environment) {
  }

  private convertKey(key: string): string {
    return `${this.environment.sessionStoragePrefix}${key}`;
  }

  public getItem<T>(key: string): T | null {
    if (localStorage.getItem(this.convertKey(key)) != null) {
      return JSON.parse(localStorage.getItem(this.convertKey(key))) as T;
    }
    return null;
  }

  public setItem(key: string, item: any) {
    localStorage.setItem(this.convertKey(key), JSON.stringify(item));
  }

  public removeItem(key: string) {
    localStorage.removeItem(this.convertKey(key));
  }

  public clear() {
    localStorage.clear();
  }
}
