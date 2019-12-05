import {Injectable} from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import {Image} from './image';
import {HttpClient} from '@angular/common/http';
import {IRepository} from '../seedwork/i-repository';
import {map} from 'rxjs/operators';
import {entityFromDto} from '../seedwork/entity';
import {NotImplementedException} from '../seedwork/exceptions/not-implemented-exception';
import {Environment} from '../../environments/abstract-environment';
import {Imageset} from '../imageset/imageset';

@Injectable({
    providedIn: 'root'
})
export class ImageNetworkRepositoryService implements IRepository<Image> {

    public readonly url;

    constructor(private environment: Environment, private http: HttpClient) {
        this.url = environment.apiUrl + 'images/';
    }

    get(key: number): Observable<Image> {
        const url = `${this.url}${key}/`;
        return this.http.get<object>(url)
            .pipe(map(dto => entityFromDto(dto, Image.prototype)));
    }

    getImagesFromImageset(imageset: Imageset): Observable<Image[]> {
        const requests = [];
        for (const imageId of imageset.images) {
            requests.push(this.get(imageId));
        }
        return forkJoin(requests);
    }

    remove(obj: Image): void {
        throw new NotImplementedException();
    }

    save(obj: Image): void {
        throw new NotImplementedException();
    }

    /**
     * @deprecated
     */
    public read(id: number): Observable<Image> {
        const url = `${this.url}${id}/`;
        return this.http.get<Image>(url);
    }

}
