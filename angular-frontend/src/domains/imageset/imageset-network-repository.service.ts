import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable, of} from 'rxjs';
import {ImageSet} from './imageset';
import {IRepository} from '../seedwork/i-repository';
import {entityFromDto} from '../seedwork/entity';
import {map, switchMap, tap} from 'rxjs/operators';
import {NotImplementedException} from '../seedwork/exceptions/not-implemented-exception';
import {Environment} from '../../environments/abstract-environment';
import {UserNetworkRepositoryService} from '../user/user-network-repository.service';
import {User} from '../user/user';
import {Team} from '../team/team';

@Injectable({
    providedIn: 'root'
})
export class ImageSetNetworkRepositoryService implements IRepository<ImageSet> {

    public url: string;

    constructor(private http: HttpClient, private environment: Environment, private userService: UserNetworkRepositoryService) {
        this.url = environment.apiUrl + 'image_sets/';
    }

    get(key: number): Observable<ImageSet> {
        const url = `${this.url}${key}/`;
        return this.http.get<object>(url)
            .pipe(map(dto => entityFromDto(dto, ImageSet.prototype)));
    }

    remove(obj: ImageSet): void {
        throw new NotImplementedException();
    }

    save(obj: ImageSet): void {
        throw new NotImplementedException();
    }

    getAll(): Observable<ImageSet[]> {
        return this.http.get<object[]>(this.url).pipe(
            map(dtos => {
                const result = [];
                for (const dto of dtos) {
                    result.push(entityFromDto(dto, ImageSet.prototype));
                }
                return result;
            })
        );
    }

    /**
     * @deprecated
     */
    public list(): Observable<ImageSet[]> {
        return this.http.get<ImageSet[]>(this.url);
    }

    /**
     * @deprecated
     */
    public read(id: number): Observable<ImageSet> {
        const url = `${this.url}${id}/`;
        return this.http.get<ImageSet>(url);
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
