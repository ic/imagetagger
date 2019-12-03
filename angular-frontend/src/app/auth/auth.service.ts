import {Injectable} from '@angular/core';
import {LocalStorageService} from '../../infrastructure/storage.local-storage/local-storage.service';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map, mapTo, switchMap, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Environment} from '../../environments/abstract-environment';
import {User} from '../../domains/user/user';
import {UserNetworkRepositoryService} from '../../domains/user/user-network-repository.service';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public url: string;
    public redirectUrl = '/';

    public authToken: string = null;

    constructor(private storage: LocalStorageService, private http: HttpClient, private router: Router, private environment: Environment,
                private userRepository: UserNetworkRepositoryService) {
        this.authToken = this.storage.getItem('authToken');
        this.url = environment.apiUrl + 'auth/';
    }

    /**
     * Login as the user whose credentials are provided.
     *
     * It does not matter if another user is already logged in. The new login will take precedence.
     *
     * @param username Users username
     * @param password Plain-text password
     * @param remember Whether the login should be remembered. No password will be saved but rather a token
     */
    public login(username: string, password: string, remember: boolean): Observable<boolean> {
        this.logout();
        return this.http.post(this.url, {
            username: username,
            password: password
        }).pipe(
            map(result => {
                if (result['token'] !== undefined) {
                    this.authToken = result['token'];
                    if (remember) {
                        this.storage.setItem('authToken', this.authToken);
                    }
                    return true;
                }

                return false;
            }),
            catchError((e) => {
                this.logout();
                return of(false);
            }),
            tap(success => {
                if (success) {
                    this.router.navigate([this.redirectUrl]);
                    this.redirectUrl = '/';
                }
            })
        );
    }

    /**
     * Logout the current user deleting all user-specific storage-values
     */
    public logout() {
        this.authToken = null;
        this.storage.removeItem('authToken');
    }

    /**
     * Returns whether or not an authentication token is present to authenticate the client.
     * No checks on the validity of this token are performed though.
     */
    public isLoggedIn(): boolean {
        return this.authToken !== null;
    }

}
