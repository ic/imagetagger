import {TestBed} from '@angular/core/testing';
import {UserNetworkRepositoryService} from './user-network-repository.service';
import {User} from './user';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {MockHttpHandler} from '../../infrastructure/network.caching-http/caching-http.service.spec';
import {entityFromDto} from '../seedwork/entity';


describe('UserService', () => {
    const testUsers: User[] = [
        entityFromDto({
            id: 0,
            username: 'testUser-0',
            points: 42,
            teamIDs: [],
            pinnedSetIDs: []
        }, User.prototype)
    ];

    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            {provide: HttpHandler, useClass: MockHttpHandler},
            {provide: HttpClient, useClass: HttpClient},
        ]
    }));

    it('should be created', () => {
        // Execution
        const service: UserNetworkRepositoryService = TestBed.get(UserNetworkRepositoryService);

        // Verification
        expect(service).toBeTruthy();
    });

    it('should return correct get() result', (done) => {
        // Setup
        const service: UserNetworkRepositoryService = TestBed.get(UserNetworkRepositoryService);
        const httpHandler: MockHttpHandler = TestBed.get(HttpHandler);

        httpHandler.responses['GET'][`${service.url}${testUsers[0].id}/`] = {
            body: testUsers[0].toDTO()
        };

        // Execution
        service.get(testUsers[0].id).subscribe(result => {

            // Verification
            expect(result).toEqual(testUsers[0]);
            done();
        });
    });
});
