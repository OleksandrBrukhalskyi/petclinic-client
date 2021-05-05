import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pet } from "../model/pet.model";

@Injectable({
    providedIn: 'root'
  })
export class PetService {
    baseUrl = `http://localhost:8080/api/pet`;
    constructor(private http: HttpClient) { }
  
    getPets() {
      return this.http.get(`${this.baseUrl}`);
    }
    add(pet: Pet) {
      return this.http.post(`${this.baseUrl}/add`, pet);
    }
    update(pet: Pet, id: number) {
      return this.http.put(`${this.baseUrl}/${id}`, pet);
    }
    delete(id: any) {
      return this.http.delete(`${this.baseUrl}/${id}`);
    }
    getById(id: any) {
      return this.http.get(`${this.baseUrl}/${id}`);
    }
    amountOfPets() {
      return this.http.get(`${this.baseUrl}/quantity`);
    }
}