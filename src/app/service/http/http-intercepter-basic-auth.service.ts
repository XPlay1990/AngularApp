import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { JWTAuthenticationService } from '../jwt-authenticationservice';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterAddJWTHeader implements HttpInterceptor {

  constructor(private basicAuthService: JWTAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let jwtAuthHeaderString = this.basicAuthService.getAuthenticatedToken();
    let username = this.basicAuthService.getAuthenticatedUser();

    if (jwtAuthHeaderString && username) {

      request = request.clone({
        setHeaders: {
          Authorization: jwtAuthHeaderString
        }
      })
    }

    return next.handle(request)
  }
}
