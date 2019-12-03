import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {User} from '../../../domains/user/user';
import {Observable} from 'rxjs';
import {AuthService} from '../../auth/auth.service';
import {UserNetworkRepositoryService} from '../../../domains/user/user-network-repository.service';
import {switchMap} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class AuthenticatedUserResolver implements Resolve<User> {

    constructor(private userRepo: UserNetworkRepositoryService, private authService: AuthService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User | null> {
        if (this.authService.isLoggedIn()) {
            return this.userRepo.get('me');
        } else {
            return null;
        }
    }
}
