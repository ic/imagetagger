import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {User} from '../../user/user';
import {Observable} from 'rxjs';
import {ImageSetNetworkRepositoryService} from '../imageset-network-repository.service';
import {UserNetworkRepositoryService} from '../../user/user-network-repository.service';
import {switchMap} from 'rxjs/operators';


/**
 * A Resolver which reads the url parameter map, queries an Imageset identified by the 'imagesetId' url parameter and resolves to
 * that imagesets creator.
 */
@Injectable({
    providedIn: 'root'
})
export class ImagesetChildCreatorResolver implements Resolve<User> {

    constructor(private imagesetService: ImageSetNetworkRepositoryService, private userService: UserNetworkRepositoryService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
        const id = +route.paramMap.get('imagesetId');
        return this.imagesetService.get(+id).pipe(
            switchMap(imageset => this.userService.getCreatorFromImageset(imageset)),
        );
    }
}
