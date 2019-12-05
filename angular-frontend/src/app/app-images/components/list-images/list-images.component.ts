import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Image} from '../../../../domains/image/image';
import {zip} from 'rxjs';


@Component({
    selector: 'app-list-images',
    templateUrl: './list-images.component.html',
    styleUrls: ['./list-images.component.scss']
})
export class ListImagesComponent implements OnInit {

    protected images: Image[];

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
            this.route.data.subscribe(data => {
           this.images = data.images;
        });
    }

}
