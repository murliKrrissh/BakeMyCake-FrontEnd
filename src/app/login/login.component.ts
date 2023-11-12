import { Component,OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cakeGuideCode:string='';
  
  constructor(private authService:AuthService,private routeService:RouteService) { }

  ngOnInit(): void {
  }
  validateCakeGuideCode(){
    this.authService.login(this.cakeGuideCode);
    
    if(this.authService.isLoggedIn){
      this.routeService.navigateToCakeRequestsView();
    }
  }

}
