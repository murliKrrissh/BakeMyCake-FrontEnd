import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cakes } from '../models/cakes';
@Injectable({
  providedIn: 'root'
})
export class CakeService {

  URL: string = "http://localhost:3000/cakes";
  constructor(private http: HttpClient) { }

  getAllCakes(): Observable<Array<Cakes>> {
    return this.http.get<Array<Cakes>>(this.URL)
  }

  getCake(id?: string) : Observable<Cakes>{
    console.log(id);
    return this.http.get<Cakes>(`${this.URL}/${id}`);
  }
}
