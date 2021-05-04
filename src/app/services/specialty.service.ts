import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Specialty } from "../model/specialty.model";

@Injectable({
    providedIn: 'root'
  })
 export class SpecialtyService {
    baseUrl = `http://localhost:8080/api/specialty`;
  
    constructor(private http: HttpClient) { }
  
    getSpecialties() {
      return this.http.get(`${this.baseUrl}`);
    }
  
    add(veterinarian: Specialty) {
      return this.http.post(`${this.baseUrl}/add`, veterinarian);
    }
  
    update(veterinarian: Specialty, id: number) {
      return this.http.put(`${this.baseUrl}/${id}`, veterinarian);
    }
  
    getById(id: number) {
      return this.http.get(`${this.baseUrl}/${id}`);
    }
  
    delete(id: number) {
      return this.http.delete(`${this.baseUrl}/${id}`);
    }
  }
  