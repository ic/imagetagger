import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ImageSet} from './imageset';
import {IRepository} from '../seedwork/i-repository';
import {entityFromDto} from '../seedwork/entity';
import {map} from 'rxjs/operators';
import {NotImplementedException} from '../seedwork/exceptions/not-implemented-exception';
import {Environment} from '../../environments/abstract-environment';

@Injectable({
    providedIn: 'root'
})
export class ImageSetNetworkRepositoryService implements IRepository<ImageSet> {

    public url: string;

    constructor(private http: HttpClient, private environment: Environment) {
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
