import {Entity, entityFromDto} from './entity';

describe('class Entity', () => {
    it('should transform a simple derived types instance to DTO', function () {
        // Setup
        const instance = new TestEntity(1, 'Bob');

        // Execution
        const dto = instance.toDTO();

        // Verification
        expect(dto).toEqual({id: 1, name: 'Bob'});
    });
});

describe('function entityFromDto()', () => {
    it('should create an appropriate instance from a derived types DTO', function () {
        // Setup
        const dto = {id: 1, name: 'Bob'};
        const realInstance = new TestEntity(1, 'Bob');

        // Execution
        const dtoInstance = entityFromDto(dto, TestEntity.prototype);

        // Verification
        expect(dtoInstance).toEqual(realInstance);
    });
});

class TestEntity extends Entity {
    public id: number;
    public name: string;

    constructor(id: number, name: string) {
        super();
        this.id = id;
        this.name = name;
    }

    public method1() {
        return 42;
    }
}
