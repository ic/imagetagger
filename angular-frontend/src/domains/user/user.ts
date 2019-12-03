import {Entity} from '../seedwork/entity';

export class User extends Entity {
    id: number;
    username: string;
    points: number;

    teams: number[];
    pinnedSets: number[];
}


// TODO Remove these 2 classes
export interface ImagesetInUser {
    id: number;
    name: string;
    priority: number;
    tags: string[];
    numberOfImages: number;
    team: { id: number, name: string };
}


export interface TeamInUser {
    id: number;
    name: string;
}

