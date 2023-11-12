import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cakes } from '../models/cakes';
import { Order } from '../models/orderDetails';
import { RouteService } from '../services/route.service';
import { CakeRequestService } from '../services/cake-request.service';
import { CakeService } from '../services/cake.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cake-cart',
  templateUrl: './cake-cart.component.html',
  styleUrls: ['./cake-cart.component.css']
})
export class CakeCartComponent implements OnInit {

  cake?: Cakes;
  stars: Array<number> = [];
  cakeRequest: Order = {};
  submitStatus:boolean=false;

  constructor(private activatedRoute: ActivatedRoute,
    private cakeService: CakeService,
    private cakeRequestService: CakeRequestService,
    private routeService: RouteService,
    private snackBar: MatSnackBar) { }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      let id = param.get("id") ?? "";
      this.cakeService.getCake(id).subscribe(data => {
        this.cake = data;
        this.stars = new Array(this.cake.rating);
      })
    })
  }

  makeRequest() {
    if (this.cakeRequest.customerName && this.cakeRequest.email && this.cakeRequest.mobile && this.cakeRequest.dateOfOrder) {
      this.cakeRequest.customerName = this.cake?.name;
      this.cakeRequestService.saveCakeRequest(this.cakeRequest).subscribe({
        next: data => {
          this.snackBar.open("Request Submitted", "", {
            duration: 3000
          });
          this.routeService.navigateToHomeView();
        },
        error: err => {
          alert(err);
        }
      })
    }
  }
  canDeactivate() {
    if (!this.submitStatus)
        this.submitStatus = confirm("You have not submitted a request to this Cake. Any details entered will be lost. Are you sure you want to leave?");
    return this.submitStatus;
}
}
