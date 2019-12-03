import {Injectable} from '@angular/core';
import {User} from './user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IRepository} from '../seedwork/i-repository';
import {map} from 'rxjs/operators';
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

    get(key: number | 'me'): Observable<User> {
        return this.http.get<object>(`${this.url}${key}/`)
            .pipe(map(userDto => entityFromDto(userDto, User.prototype)));
    }

    remove(obj: User): void {
        throw new NotImplementedException();
    }

    save(obj: User): void {
        throw new NotImplementedException();
    }

}
