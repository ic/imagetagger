import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Team} from '../../../domains/team/team';
import {TeamNetworkRepositoryService} from '../../../domains/team/team-network-repository.service';


@Injectable({
    providedIn: 'root'
})
export class OwnTeamsResolver implements Resolve<Team[]> {
    constructor(private teamRepository: TeamNetworkRepositoryService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Team[]> {
        return this.teamRepository.getOwnTeams();
    }
}
