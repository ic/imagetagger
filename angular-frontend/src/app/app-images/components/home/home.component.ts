import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../../domains/user/user';
import {ImageSet} from '../../../../domains/imageset/imageset';
import {HomeData} from './home-resolver.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    protected user: User;
    protected imagesets: ImageSet[];

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.data.subscribe((data: {homeData: HomeData}) => {
            this.user = data.homeData.user;
            this.imagesets = data.homeData.imagesets;
        });
    }

}
