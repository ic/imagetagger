import {Component, Input, OnInit} from '@angular/core';
import {ImageSet} from '../../../../domains/imageset/imageset';

@Component({
    selector: 'app-list-images',
    templateUrl: './list-images.component.html',
    styleUrls: ['./list-images.component.scss']
})
export class ListImagesComponent implements OnInit {

    @Input() imageset: ImageSet;

    constructor() {
    }

    ngOnInit() {
    }

}
