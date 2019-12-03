import {Entity} from '../seedwork/entity';

export class Image extends Entity {
    id: number;
    name: string;
    width: number;
    height: number;
    url: string;
    annotations: number[];
}


// TODO remove this class
export interface AnnotationInImage {
    id: number;
    concealed: boolean;
    blurred: boolean;
    closed: boolean;
    notInImage: boolean;
    annotationType: number;
    vector?: object;
}
