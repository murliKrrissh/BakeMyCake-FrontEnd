import { Injectable } from '@angular/core';
import { CakeCartComponent } from '../cake-cart/cake-cart.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateService {
  canDeactivate(
    cKt: CakeCartComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return cKt.canDeactivate ? cKt.canDeactivate() : true;
}

  constructor() { }
}
