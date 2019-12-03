import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {PrematureAnnotation} from '../../app/app-images/components/image/annotatable/annotatable.directive';
import {Annotation} from './annotation';
import {IRepository} from '../seedwork/i-repository';
import {NotImplementedException} from '../seedwork/exceptions/not-implemented-exception';
import {entityFromDto} from '../seedwork/entity';
import {Environment} from '../../environments/abstract-environment';

@Injectable({
    providedIn: 'root'
})
export class AnnotationNetworkRepositoryService implements IRepository<Annotation> {

    public readonly url;

    constructor(private environment: Environment, private http: HttpClient) {
        this.url = environment.apiUrl + 'annotations/';
    }

    get(key: number): Observable<Annotation> {
        const url = `${this.url}${key}/`;
        return this.http.get<object>(url)
            .pipe(map(dto => entityFromDto(dto, Annotation.prototype)));
    }

    remove(obj: Annotation): void {
        throw new NotImplementedException();
    }

    save(obj: Annotation): void {
        throw new NotImplementedException();
    }

    /**
     * @deprecated
     */
    public delete(id: number): Observable<boolean> {
        const url = `${this.url}${id}/`;
        return this.http.delete(url).pipe(
            map(() => true),
            catchError(map(() => false))
        );
    }

    /**
     * Create a new Annotation from a premature Annotation
     *
     * @deprecated
     */
    public create(annotation: PrematureAnnotation): Observable<Annotation> {
        return this.http.post<Annotation>(this.url, {
            annotationType: annotation.annotationType.id,
            image: annotation.image.id,
            notInImage: annotation.notInImage,
            blurred: annotation.notInImage ? undefined : annotation.blurred,
            concealed: annotation.notInImage ? undefined : annotation.concealed,
            vector: annotation.notInImage ? undefined : annotation.vector
        });
    }
}
