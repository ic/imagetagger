import {Injectable} from '@angular/core';
import {forkJoin, Observable, of} from 'rxjs';
import {Team} from './team';
import {HttpClient} from '@angular/common/http';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {IRepository} from '../seedwork/i-repository';
import {entityFromDto} from '../seedwork/entity';
import {NotImplementedException} from '../seedwork/exceptions/not-implemented-exception';
import {Environment} from '../../environments/abstract-environment';
import {UserNetworkRepositoryService} from '../user/user-network-repository.service';
import {User} from '../user/user';


@Injectable({
    providedIn: 'root'
})
export class TeamNetworkRepositoryService implements IRepository<Team> {

    public readonly url;

    constructor(private environment: Environment, private userRepository: UserNetworkRepositoryService, private http: HttpClient) {
        this.url = environment.apiUrl + 'teams/';
    }

    get(key: number): Observable<Team> {
        const url = `${this.url}${key}/`;
        return this.http.get<object>(url)
            .pipe(map(dto => entityFromDto(dto, Team.prototype)));
    }

    remove(obj: Team): void {
        throw new NotImplementedException();
    }

    save(obj: Team): void {
        throw new NotImplementedException();
    }

    getOwnTeams(): Observable<Team[]> {             // TODO Write unit test!!!
        return this.userRepository.get('me').pipe(
            switchMap((user: User) => {
                const teamRequests = [];
                for (const teamId of user.teams) {
                    teamRequests.push(this.get(teamId));
                }
                return forkJoin(teamRequests);
            })
        );
    }

    /**
     * @deprecated
     */
    public list(): Observable<Team[]> {
        return this.http.get<Team[]>(this.url);
    }

    /**
     * @deprecated
     */
    public create(name: string): Observable<boolean> {
        return this.http.post(this.url, {
            name: name
        }).pipe(
            map(() => true),
            catchError(() => of(false))
        );
    }

}
