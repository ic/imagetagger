import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Imageset} from '../../../../domains/imageset/imageset';
import {ImageSetNetworkRepositoryService} from '../../../../domains/imageset/imageset-network-repository.service';
import {Team} from '../../../../domains/team/team';
import {User} from '../../../../domains/user/user';


@Component({
    selector: 'app-imageset',
    templateUrl: './imageset.component.html',
    styleUrls: ['./imageset.component.scss']
})
export class ImagesetComponent implements OnInit {

    protected imageset: Imageset;
    protected team: Team;
    protected creator: User;

    constructor(private imagesetService: ImageSetNetworkRepositoryService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.imageset = data.imageset;
            this.team = data.team;
            this.creator = data.creator;
        });
    }

    protected togglePinned() {
        this.imageset.togglePinned();
        this.imagesetService.save(this.imageset);
    }

}
