import {Injectable} from '@angular/core';
import {User} from './user';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IRepository} from '../seedwork/i-repository';
import {catchError, map, mapTo} from 'rxjs/operators';
import {NotImplementedException} from '../seedwork/exceptions/not-implemented-exception';
import {entityFromDto} from '../seedwork/entity';
import {Environment} from '../../environments/abstract-environment';


@Injectable({
    providedIn: 'root'
})
export class UserNetworkRepositoryService implements IRepository<User> {

    public url: string;

    constructor(private environment: Environment, private http: HttpClient) {
        this.url = environment.apiUrl + 'users/';
    }

    get(key: number): Observable<User> {
        return this.http.get<object>(`${this.url}${key}/`).pipe(
            map(userDto => entityFromDto(userDto, User.prototype)),
        );
    }

    getMe(): Observable<User | null> {
        // @ts-ignore
        return this.get('me');
    }

    remove(obj: User): void {
        throw new NotImplementedException();
    }

    save(obj: User): void {
        throw new NotImplementedException();
    }

}
