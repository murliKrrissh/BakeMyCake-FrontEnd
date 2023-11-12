import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CakeListComponent } from './cake-list/cake-list.component';
import { CakeCartComponent } from './cake-cart/cake-cart.component';
import { CakeRequestsComponent } from './cake-requests/cake-requests.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './services/auth.service';
import { CanActivateservice } from './services/can-activate.service';
import { CanDeactivateService } from './services/can-deactivate.service';

const routes: Routes = [
  {path:'header' , component:HeaderComponent},
  {path:'',redirectTo:'/cake-list',pathMatch:'full'},
  {path:'cake-list', component:CakeListComponent},
  {path:'cake-list/:id',component:CakeCartComponent,canDeactivate:[CanDeactivateService]},
  {path:'cake-requests',component:CakeRequestsComponent, canActivate:[CanActivateservice]},
  {path:'login', component:LoginComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
