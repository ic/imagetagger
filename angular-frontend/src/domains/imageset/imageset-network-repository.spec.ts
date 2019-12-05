import {TestBed} from '@angular/core/testing';
import {ImageSetNetworkRepositoryService} from './imageset-network-repository.service';
import {entityFromDto} from '../seedwork/entity';
import {Imageset} from './imageset';
import {MockHttpHandler} from '../../infrastructure/network.caching-http/caching-http.service.spec';
import {HttpHandler} from '@angular/common/http';


describe('ImageSetService', () => {
    const testSet = entityFromDto<Imageset>({
        id: 1,
        name: 'test-set',
        time: '11223344',
        public: false,
        publicCollaboration: false,
        imageLock: false,
        priority: 10,
        zipState: 0,
        permissions: {
            verify: false,
            annotate: false,
            createExport: false,
            deleteExport: false,
            deleteAnnotation: false,
            deleteSet: false,
            deleteImages: false,
            editAnnotation: true,
            editSet: true,
            read: true
        },
        tags: ['test', 'transient'],
        isPinned: true,
        numberOfImages: 1000,
        images: [1, 2, 3],
        mainAnnotationType: 15,
        team: 1,
    }, Imageset.prototype);

    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            {provide: HttpHandler, useClass: MockHttpHandler}
        ]
    }));

    it('should be created', () => {
        const service: ImageSetNetworkRepositoryService = TestBed.get(ImageSetNetworkRepositoryService);
        expect(service).toBeTruthy();
    });

    it('should return correct get() result', function (done) {
        // Setup
        const service: ImageSetNetworkRepositoryService = TestBed.get(ImageSetNetworkRepositoryService);
        const httpHandler: MockHttpHandler = TestBed.get(HttpHandler);

        httpHandler.responses['GET'][`${service.url}${testSet.id}/`] = {
            body: testSet.toDTO(),
        };

        // Execution
        service.get(testSet.id).subscribe(result => {

            // Verification
            expect(result).toEqual(testSet);
            done();
        });
    });
});
