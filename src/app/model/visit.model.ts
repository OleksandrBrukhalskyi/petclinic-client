import { Pet } from "./pet.model";

export class Visit {
    id: number;
    goalOfVisit: string;
    pet: any;
    price: any;
    visitDate: Date
    
    constructor() {
        this.pet = new Pet();
    }
}