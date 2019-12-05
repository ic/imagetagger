import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {User} from '../user';
import {Observable} from 'rxjs';
import {AuthService} from '../../../app/auth/auth.service';
import {UserNetworkRepositoryService} from '../user-network-repository.service';


@Injectable({
    providedIn: 'root'
})
export class OwnUserResolver implements Resolve<User> {

    constructor(private userRepo: UserNetworkRepositoryService, private authService: AuthService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User | null> {
        if (this.authService.isLoggedIn()) {
            return this.userRepo.getMe();
        } else {
            return null;
        }
    }
}
