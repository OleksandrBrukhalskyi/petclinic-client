import { Specialty } from "./specialty.model";

export class Veterinarian {
    id: number;
    surname: string;
    firstname: string;
    patronymic: string;
    specialty: any;
    
    constructor() {
        this.specialty = new Specialty();
    }

}