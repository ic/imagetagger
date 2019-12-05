import {Component, OnInit} from '@angular/core';
import {Observable, zip} from 'rxjs';
import {ImageSet} from '../../../../domains/imageset/imageset';
import {map} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {ImagesetInUser, User} from '../../../../domains/user/user';
import {Team} from '../../../../domains/team/team';


@Component({
    selector: 'app-list-imagesets',
    templateUrl: './list-imagesets.component.html',
    styleUrls: ['./list-imagesets.component.scss']
})
export class ListImagesetsComponent implements OnInit {

    user: User;
    ownTeams: Team[];

    protected visibleSets: ImageSet[];
    private allImagesets: ImageSet[];

    constructor(protected router: Router, protected activeRoute: ActivatedRoute) {
    }

    ngOnInit() {
        zip(
            this.activeRoute.data,
            this.activeRoute.paramMap
        ).subscribe(arr => {
            const data = arr[0];
            const paramMap = arr[1];

            this.allImagesets = data.allImagesets;
            this.user = data.authenticatedUser;
            this.ownTeams = data.ownTeams;

            this.visibleSets = this.getVisibleSets(paramMap.get('visibleSet'));
        });
    }

    /**
     * Get list of Imagesets which are visible when the specified filter is applied
     * @param filter Filter to apply to this.allImagesets.
     *      When it is 'pinned' only the users pinned imagesets get returned.
     *      When it is a number that number should refer to a Teams ID and only that teams imagesets get returned.
     */
    private getVisibleSets(filter: string | number): ImageSet[] {
        if (filter === 'pinned') {
            return this.allImagesets.filter(imageset => this.user.pinnedSets.includes(imageset.id));
        } else {
            filter = filter.toString();
            return this.allImagesets.filter(imageset => imageset.team.toString() === filter);
        }
    }

    /**
     * Returns whether or not the specified navSection is currently active based on URL parameters
     * @param navSection The navSection to check for activity
     */
    protected isNavActive(navSection: string | number): Observable<boolean> {
        if (typeof navSection === 'number') {
            navSection = navSection.toString();
        }

        return this.activeRoute.paramMap.pipe(
            map(params => params.get('visibleSet') === navSection),
        );
    }

}
