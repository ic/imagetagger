import {Entity} from '../seedwork/entity';

export class Team extends Entity {
    id: number;
    name: string;
    members: number[];
    admins: number[];
    website: string;
    permissions: TeamPermissions;
}


export interface TeamPermissions {
    createSet: boolean;
    userManagement: boolean;
    manageExportFormats: boolean;
}
