import {UsefulDirs} from './useful-dirs';


export class Athlete {
    id: number;
    name: string;
    photoUrl: string;
    usefulDirs: UsefulDirs = new UsefulDirs();

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.photoUrl = this.usefulDirs.images + this.name.toLowerCase().trim().replace(' ', '-') + '.jpg';
    }
}
