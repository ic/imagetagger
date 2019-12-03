import {Component, OnInit} from '@angular/core';
import {UserNetworkRepositoryService} from '../../../domains/user/user-network-repository.service';
import {User} from '../../../domains/user/user';
import {Observable} from 'rxjs';
import {AuthService} from '../../auth/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    // protected user$: Observable<User>;
    protected user: User;

    constructor(private route: ActivatedRoute, private authService: AuthService) {
    }

    ngOnInit() {
        this.route.data.subscribe((data: {authorizedUser: User}) => {
            this.user = data.authorizedUser;
        });
    }

}
