import {Component, OnInit} from '@angular/core';
import {User} from '../../../domains/user/user';
import {AuthService} from '../../auth/auth.service';
import {Team} from '../../../domains/team/team';
import {TeamNetworkRepositoryService} from '../../../domains/team/team-network-repository.service';
import {UserNetworkRepositoryService} from '../../../domains/user/user-network-repository.service';
import {Observable} from 'rxjs';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    protected user$: Observable<User>;
    protected ownTeams$: Observable<Team[]>;

    constructor(private authService: AuthService, private userService: UserNetworkRepositoryService,
                private teamService: TeamNetworkRepositoryService) {
    }

    ngOnInit() {
        this.user$ = this.userService.getMe();
        this.ownTeams$ = this.teamService.getOwnTeams();
    }

}
