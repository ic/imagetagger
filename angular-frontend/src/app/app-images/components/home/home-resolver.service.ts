import {Injectable} from '@angular/core';
import {User} from '../../../../domains/user/user';
import {ImageSet} from '../../../../domains/imageset/imageset';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, zip} from 'rxjs';
import {ImageSetNetworkRepositoryService} from '../../../../domains/imageset/imageset-network-repository.service';
import {UserNetworkRepositoryService} from '../../../../domains/user/user-network-repository.service';
import {map} from 'rxjs/operators';


export interface HomeData {
    user: User;
    imagesets: ImageSet[];
}


@Injectable({
    providedIn: 'root'
})
export class HomeResolverService implements Resolve<HomeData> {

    constructor(private imageSetService: ImageSetNetworkRepositoryService, private userService: UserNetworkRepositoryService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<HomeData> {
        return zip(
            this.imageSetService.list(),
            this.userService.get('me')
        ).pipe(map(value => {
            return {
                imagesets: value[0],
                user: value[1]
            } as HomeData;
        }));
    }
}
