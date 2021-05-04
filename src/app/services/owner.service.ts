import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Owner } from '../model/owner.model';
@Injectable({
    providedIn: 'root'
  })
  export class OwnerService {
  
  
      baseUrl = `http://localhost:8080/api/owner`;
  
    constructor(private http: HttpClient) { }
  
    getOwners() {
        return this.http.get(`${this.baseUrl}`);
    }
  
    add(owner: Owner) {
        return this.http.post(`${this.baseUrl}/add`, owner);
    }
  
    update(owner: Owner, id: number) {
        return this.http.put(`${this.baseUrl}/${id}`, owner);
    }
    delete(id: any) {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }
  
    getById(id: any) {
      return this.http.get(`${this.baseUrl}/${id}`);
    }
    getQuantity() { 
      return this.http.get(`${this.baseUrl}/quantity`);
               
    }
  }
