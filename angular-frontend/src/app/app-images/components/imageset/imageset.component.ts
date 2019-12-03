import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ImageSet} from '../../../../domains/imageset/imageset';
import {ImagesetData} from './imageset-resolver.service';
import {ImageSetNetworkRepositoryService} from '../../../../domains/imageset/imageset-network-repository.service';

@Component({
    selector: 'app-imageset',
    templateUrl: './imageset.component.html',
    styleUrls: ['./imageset.component.scss']
})
export class ImagesetComponent implements OnInit {

    protected imageSet: ImageSet;

    constructor(private imageSetService: ImageSetNetworkRepositoryService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.data.subscribe((data: { imageSetData: ImagesetData }) => {
            this.imageSet = data.imageSetData.set;
        });
    }

    protected togglePin() {
        if (this.imageSet.isPinned) {
            this.imageSetService.unpin(this.imageSet.id).subscribe(() => this.imageSet.isPinned = false);
        } else {
            this.imageSetService.pin(this.imageSet.id).subscribe(() => this.imageSet.isPinned = true);
        }
    }

}
