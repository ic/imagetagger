import {Injectable} from '@angular/core';
import {AnnotationTypeNetworkRepositoryService} from '../annotation-type-network-repository.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {AnnotationType} from '../annotation-type';
import {Observable} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AllAnnotationTypesResolver implements Resolve<AnnotationType[]> {

    constructor(private atService: AnnotationTypeNetworkRepositoryService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AnnotationType[]> {
        return this.atService.getAll();
    }
}
