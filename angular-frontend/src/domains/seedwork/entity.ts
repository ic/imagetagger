export function entityFromDto<T extends Entity>(dto: object, prototype: object) {
    const res = Object.create(prototype);
    Object.assign(res, dto);
    return res as T;
}

export abstract class Entity {
    public toDTO(): object {
        return JSON.parse(JSON.stringify(this));
    }
}
