import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Imageset} from './imageset';
import {IRepository} from '../seedwork/i-repository';
import {entityFromDto} from '../seedwork/entity';
import {map} from 'rxjs/operators';
import {NotImplementedException} from '../seedwork/exceptions/not-implemented-exception';
import {Environment} from '../../environments/abstract-environment';
import {UserNetworkRepositoryService} from '../user/user-network-repository.service';

@Injectable({
    providedIn: 'root'
})
export class ImageSetNetworkRepositoryService implements IRepository<Imageset> {

    public url: string;

    constructor(private http: HttpClient, private environment: Environment, private userService: UserNetworkRepositoryService) {
        this.url = environment.apiUrl + 'image_sets/';
    }

    get(key: number): Observable<Imageset> {
        const url = `${this.url}${key}/`;
        return this.http.get<object>(url)
            .pipe(map(dto => entityFromDto(dto, Imageset.prototype)));
    }

    remove(obj: Imageset): void {
        throw new NotImplementedException();
    }

    save(obj: Imageset): void {
        throw new NotImplementedException();
    }

    getAll(): Observable<Imageset[]> {
        return this.http.get<object[]>(this.url).pipe(
            map(dtos => {
                const result = [];
                for (const dto of dtos) {
                    result.push(entityFromDto(dto, Imageset.prototype));
                }
                return result;
            })
        );
    }

    /**
     * @deprecated
     */
    public list(): Observable<Imageset[]> {
        return this.http.get<Imageset[]>(this.url);
    }

    /**
     * @deprecated
     */
    public read(id: number): Observable<Imageset> {
        const url = `${this.url}${id}/`;
        return this.http.get<Imageset>(url);
    }

    /**
     * @deprecated
     */
    public pin(id: number) {
        const url = `${this.url}${id}/pin/`;
        return this.http.put(url, null);
    }

    /**
     * @deprecated
     */
    public unpin(id: number) {
        const url = `${this.url}${id}/pin/`;
        return this.http.delete(url);
    }

}
