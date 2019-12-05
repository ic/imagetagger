import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Imageset} from '../imageset';
import {ImageSetNetworkRepositoryService} from '../imageset-network-repository.service';
import {Observable} from 'rxjs';


/**
 * A Resolver which reads the url parameter map, and resolves an Imageset identified by the 'imagesetId' url parameter.
 */
@Injectable({
    providedIn: 'root'
})
export class ImagesetResolver implements Resolve<Imageset> {

    constructor(private imagesetService: ImageSetNetworkRepositoryService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Imageset> {
        const id = route.paramMap.get('imagesetId');
        return this.imagesetService.get(+id);
    }
}
