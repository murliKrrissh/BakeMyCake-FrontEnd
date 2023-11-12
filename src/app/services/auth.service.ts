import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn:boolean=false;
  constructor() { }
  login(cakeGuideCode:string){
    this.isLoggedIn=cakeGuideCode=="Krrissh@123";
  }
  logout(){
    this.isLoggedIn=false;
  }
}
