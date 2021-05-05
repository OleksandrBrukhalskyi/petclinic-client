import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Visit } from "../model/visit.model";
@Injectable({
    providedIn: 'root'
  })
export class VisitService {
    baseUrl = `http://localhost:8080/api/visit`;

    constructor(private http: HttpClient) { }
  
    getVisits() {
      return this.http.get(`${this.baseUrl}`);
    }
  
    add(visit: Visit) {
      return this.http.post(`${this.baseUrl}/add`, visit);
    }
  
    update(visit: Visit, id: number) {
      return this.http.put(`${this.baseUrl}/${id}`, visit);
    }
  
    getById(id: number) {
      return this.http.get(`${this.baseUrl}/${id}`);
    }
  
    delete(id: number) {
      return this.http.delete(`${this.baseUrl}/${id}`);
    }
    income() {
        return this.http.get(`${this.baseUrl}/income`);
    }
    incomePerVisits() {
        return this.http.get(`${this.baseUrl}/income-per-visits`)
    }
}