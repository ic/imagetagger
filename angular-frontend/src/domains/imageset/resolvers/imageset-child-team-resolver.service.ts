import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Team} from '../../team/team';
import {ImageSetNetworkRepositoryService} from '../imageset-network-repository.service';
import {TeamNetworkRepositoryService} from '../../team/team-network-repository.service';
import {Observable} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';


/**
 * A Resolver which reads the url parameter map, queries an Imageset identified by the 'imagesetId' url parameter and resolves to
 * that imagesets team.
 */
@Injectable({
    providedIn: 'root'
})
export class ImagesetChildTeamResolver implements Resolve<Team> {

    constructor(private imagesetService: ImageSetNetworkRepositoryService, private teamService: TeamNetworkRepositoryService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Team> {
        const id = route.paramMap.get('imagesetId');
        return this.imagesetService.get(+id).pipe(
            switchMap(imageset => this.teamService.get(imageset.team)),
        );
    }
}
