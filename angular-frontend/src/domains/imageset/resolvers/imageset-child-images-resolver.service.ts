import {Injectable} from '@angular/core';
import {ImageSetNetworkRepositoryService} from '../imageset-network-repository.service';
import {ImageNetworkRepositoryService} from '../../image/image-network-repository.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Image} from '../../image/image';
import {forkJoin, Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class ImagesetChildImagesResolver implements Resolve<Image[]> {

    constructor(private imagesetService: ImageSetNetworkRepositoryService, private imageService: ImageNetworkRepositoryService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Image[]> {
        const id = +route.paramMap.get('imagesetId');
        return this.imagesetService.get(id).pipe(
            switchMap(imageset => this.imageService.getImagesFromImageset(imageset)),
        );
    }
}
