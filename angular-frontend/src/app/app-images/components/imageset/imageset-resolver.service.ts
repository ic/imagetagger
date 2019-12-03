import {Injectable} from '@angular/core';
import {ImageSetNetworkRepositoryService} from '../../../../domains/imageset/imageset-network-repository.service';
import {ActivatedRouteSnapshot, ParamMap, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {ImageSet} from '../../../../domains/imageset/imageset';
import {EMPTY, Observable, of, zip} from 'rxjs';
import {catchError, flatMap, map, tap} from 'rxjs/operators';
import {UserNetworkRepositoryService} from '../../../../domains/user/user-network-repository.service';


export interface ImagesetData {
    set: ImageSet;
}


@Injectable({
    providedIn: 'root'
})
export class ImagesetResolverService implements Resolve<ImagesetData> {

    constructor(private imageSetService: ImageSetNetworkRepositoryService, private userService: UserNetworkRepositoryService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ImagesetData> {
        const id = route.paramMap.get('imagesetId');
        if (+id) {
            return this.imageSetService.read(+id).pipe(
                map(value => {
                    return {
                        set: value
                    } as ImagesetData;
                }),
                catchError(flatMap(() => {
                    this.router.navigate(['/404']);
                    return EMPTY;
                }))
            );

        } else {
            this.router.navigate(['/404']);
            return EMPTY;
        }
    }

}
