import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Image} from '../../../../domains/image/image';


@Component({
    selector: 'app-list-images',
    templateUrl: './list-images.component.html',
    styleUrls: ['./list-images.component.scss']
})
export class ListImagesComponent implements OnInit {

    /**
     * URL under which individual images are addressed. On selection of an image, that images url is built as <imagesUrl>/<imageId>
     */
    @Input() imagesUrl: string;

    protected images: Image[];

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.images = data.images;
        });
    }

}
