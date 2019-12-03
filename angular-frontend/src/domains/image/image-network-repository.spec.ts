import {TestBed} from '@angular/core/testing';
import {ImageNetworkRepositoryService} from './image-network-repository.service';
import {HttpHandler} from '@angular/common/http';
import {MockHttpHandler} from '../../infrastructure/network.caching-http/caching-http.service.spec';
import {Image} from './image';
import {entityFromDto} from '../seedwork/entity';


describe('ImagesService', () => {
    const testImage = entityFromDto<Image>({
        id: 42,
        name: 'photo from prague',
        width: 800,
        height: 600,
        url: 'https://images.world/42',
        annotations: [115, 483, 123]
    }, Image.prototype);

    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            {provide: HttpHandler, useClasse: MockHttpHandler}
        ]
    }));

    it('should be created', () => {
        const service: ImageNetworkRepositoryService = TestBed.get(ImageNetworkRepositoryService);
        expect(service).toBeTruthy();
    });

    it('should should return correct get() result', function (done) {
        // Setup
        const service: ImageNetworkRepositoryService = TestBed.get(ImageNetworkRepositoryService);
        const httpHandler: MockHttpHandler = TestBed.get(HttpHandler);

        httpHandler.responses['GET'][`${service.url}${testImage.id}`] = {
            body: testImage.toDTO(),
        };

        // Execution
        service.get(testImage.id).subscribe(result => {

            // Verification
            expect(result).toEqual(testImage);
            done();
        });
    });
});
