import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { API_URL } from '../app.constants';

export const AUTHENTICATED_USER = 'authenticatedUser';
export const TOKEN = 'token';
export const SESSION_ITEMS = [AUTHENTICATED_USER, TOKEN];

@Injectable({
  providedIn: 'root'
})
export class JWTAuthenticationService {

  constructor(private httpClient: HttpClient) { }

  executeJWTAuthenticationService(username, password) {
    return this.httpClient.post<any>(`${API_URL}/authenticate`, { username, password })
      .pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return data;
          }
        )
      );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser) {
      return sessionStorage.getItem(TOKEN)
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return (user != null);
  }

  logout() {
    for (let entry of SESSION_ITEMS) {
      sessionStorage.removeItem(entry)
    }
  }
}

export class AuthenticationBean {
  constructor(public message: string) { }
}