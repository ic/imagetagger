import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ImageSetNetworkRepositoryService} from '../../../../../domains/imageset/imageset-network-repository.service';
import {ImageSet} from '../../../../../domains/imageset/imageset';
import {UserNetworkRepositoryService} from '../../../../../domains/user/user-network-repository.service';
import {map, flatMap, tap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {ImagesetInUser, User} from '../../../../../domains/user/user';

@Component({
    selector: 'app-list-imagesets',
    templateUrl: './list-imagesets.component.html',
    styleUrls: ['./list-imagesets.component.scss']
})
export class ListImagesetsComponent implements OnInit {

    @Input() imagesets: ImageSet[];
    @Input() user: User;

    protected visibleSets$: Observable<ImagesetInUser[]>;

    constructor(protected router: Router, protected activeRoute: ActivatedRoute) {
    }

    ngOnInit() {
        // Define visibleSets$ to be selected by route-parameter and if that parameter is an ID, filter imageSets$ to only include sets
        // from the ID's corresponding team
        /*this.visibleSets$ = this.activeRoute.paramMap.pipe(
            map(params => {
                const selection = params.get('visibleSet');

                if (selection === 'pinned') {
                    return this.user.pinnedSetIDs;
                } else {
                    return this.imagesets.filter(i => i.team.id.toString() === selection);
                }
            })
        );*/
    }

    protected isNavActive(navSection: string | number): Observable<boolean> {
        if (typeof navSection === 'number') {
            navSection = navSection.toString();
        }

        return this.activeRoute.paramMap.pipe(
            map(params => params.get('visibleSet') === navSection),
        );
    }

}
