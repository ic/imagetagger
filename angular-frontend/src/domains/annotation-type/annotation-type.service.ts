import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AnnotationType} from './annotation-type';
import {IRepository} from '../seedwork/i-repository';
import {map} from 'rxjs/operators';
import {entityFromDto} from '../seedwork/entity';
import {NotImplementedException} from '../seedwork/exceptions/not-implemented-exception';
import {Environment} from '../../environments/abstract-environment';

@Injectable({
    providedIn: 'root'
})
export class AnnotationTypeService implements IRepository<AnnotationType> {

    public readonly url;

    constructor(private environment: Environment, private http: HttpClient) {
        this.url = environment.apiUrl + 'annotation_types/';
    }

    get(key: number): Observable<AnnotationType> {
        const url = `${this.url}${key}/`;
        return this.http.get<object>(url)
            .pipe(map(dto => entityFromDto(dto, AnnotationType.prototype)));
    }

    remove(obj: AnnotationType): void {
        throw new NotImplementedException();
    }

    save(obj: AnnotationType): void {
        throw new NotImplementedException();
    }

    /**
     * @deprecated
     */
    public list(): Observable<AnnotationType[]> {
        return this.http.get<AnnotationType[]>(this.url);
    }
}
