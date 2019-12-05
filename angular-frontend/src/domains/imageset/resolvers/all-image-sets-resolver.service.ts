import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Imageset} from '../imageset';
import {Observable} from 'rxjs';
import {ImageSetNetworkRepositoryService} from '../imageset-network-repository.service';

@Injectable({
  providedIn: 'root'
})
export class AllImageSetsResolver implements Resolve<Imageset[]> {

  constructor(private imagesetService: ImageSetNetworkRepositoryService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Imageset[]> {
        return this.imagesetService.getAll();
    }
}
