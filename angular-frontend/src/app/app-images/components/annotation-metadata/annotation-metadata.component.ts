import {Component, Input, OnInit} from '@angular/core';
import {AnnotationNetworkRepositoryService} from '../../../../domains/annotation/annotation-network-repository.service';


@Component({
    selector: 'app-annotation-metadata',
    templateUrl: './annotation-metadata.component.html',
    styleUrls: ['./annotation-metadata.component.scss']
})
export class AnnotationMetadataComponent implements OnInit {

    @Input() annotationId: number;

    constructor(private annotationService: AnnotationNetworkRepositoryService) {
    }

    ngOnInit() {
    }

}
