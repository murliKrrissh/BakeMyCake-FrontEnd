import { Component,OnInit } from '@angular/core';
import { Order } from '../models/orderDetails';
import { CakeRequestService } from '../services/cake-request.service';
@Component({
  selector: 'app-cake-requests',
  templateUrl: './cake-requests.component.html',
  styleUrls: ['./cake-requests.component.css']
})
export class CakeRequestsComponent implements OnInit {

  
  displayedColumns: string[] = ['dateOfOrder', 'customerName', 'email', 'mobile'];
  cakeRequests: Order[] = [];
  constructor(private cakeRequestService:CakeRequestService) { }

  ngOnInit(): void {
    this.cakeRequestService.getAllCakeReqeusts().subscribe({
      next: data => {
        this.cakeRequests = data;
      },
      error: err => {
        alert(err);
      }
    });
  }

}
