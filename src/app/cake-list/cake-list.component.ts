import { Component } from '@angular/core';
import { Cakes } from '../models/cakes';
import { CakeService } from '../services/cake.service';
@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.css']
})
export class CakeListComponent {
  
  Cookies: string = "cookie";
  Cakes: string = "cake";
  Brownies: string = "brownie";
  All:string="all"

  cakes: Array<Cakes> = [];

  constructor(private cakeService: CakeService) { }

  ngOnInit(): void {
    this.cakeService.getAllCakes().subscribe({
      next: data => {
        this.cakes = data;
      },
      error: err => {
        alert(err);
      }
    });
  }
  onSearchTextChanged(itemName: string) {
    this.cakeService.getAllCakes().subscribe({
      next: (data) => {
        if (itemName || itemName !== '') {
          this.cakes = data.filter((item) =>
            item.name?.toLowerCase().includes(itemName.toLowerCase())
          );
        } else {
          this.cakes = data;
        }
      },
      error: (error) => {
        alert('Network Error !! Please Try Again Later');
      },
    });
  }
  reset(itemName:string){
    this.cakeService.getAllCakes().subscribe({
      next: data => {if (itemName==="all") {
        this.cakes = data;
      }
      }
    })
  }
  displaysorted(itemName: string) {
    this.cakeService.getAllCakes().subscribe({
      next: (data) => {
        if (itemName || itemName !== '') {
          this.cakes = data.filter((product) =>
            product.category?.toLowerCase().includes(itemName.toLowerCase())
          );
        } else {
          this.cakes = data;
        }
      },
      error: (error) => {
        alert('Network Error !! Please Try Again Later');
      },
    });
  }

}
