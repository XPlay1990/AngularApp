import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { JWTAuthenticationService } from './jwt-authenticationservice';
@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {
  constructor(private basicAuthService: JWTAuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.basicAuthService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
