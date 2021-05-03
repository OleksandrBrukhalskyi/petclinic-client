import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veterinarian } from '../model/veterinarian.model';

@Injectable({
  providedIn: 'root'
})
export class VeterinarianService {
  baseUrl = `http://localhost:8080/api/veterinarian`;

  constructor(private http: HttpClient) { }

  getVeterinarians() {
    return this.http.get(`${this.baseUrl}`);
  }

  add(veterinarian: Veterinarian) {
    return this.http.post(`${this.baseUrl}/add`,veterinarian);
  }

  update(veterinarian: Veterinarian, id: number) {
    return this.http.put(`${this.baseUrl}/${id}`,veterinarian);
  }

  getById(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
