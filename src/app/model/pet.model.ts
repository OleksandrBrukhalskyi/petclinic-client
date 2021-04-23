import { Owner } from "./owner.model";

export class Pet {
    id: number;
    name: string;
    dateOfBirth: Date;
    breed: string;
    owner: any;

    constructor() {
        this.owner = new Owner(this.owner.surname,this.owner.firstname,this.owner.patronymic,this.owner.homeAddress,this.owner.phoneNumber);
    }
}