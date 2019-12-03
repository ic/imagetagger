import {Observable} from 'rxjs';

export interface IRepository<T> {
    get(key: number): Observable<T>;

    save(obj: T): void;

    remove(obj: T): void;
}
