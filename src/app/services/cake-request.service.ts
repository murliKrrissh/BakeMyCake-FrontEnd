import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/orderDetails';
@Injectable({
  providedIn: 'root'
})
export class CakeRequestService {

  URL: string = " http://localhost:3000/orderDetails";
  constructor(private http: HttpClient) { }

  getAllCakeReqeusts() : Observable<Array<Order>> {
    return this.http.get<Array<Order>>(`${this.URL}`);
  }

  saveCakeRequest(cakeRequest? : Order) : Observable<Order> {
    return this.http.post<Order>(`${this.URL}`, cakeRequest)
  }
}
