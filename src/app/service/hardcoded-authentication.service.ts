import { Injectable } from '@angular/core';
import { timingSafeEqual } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if (username === "Jan" && password === "") {
      sessionStorage.setItem('authenticatedUser', username);
      return true
    }
    return false
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return (user != null);
  }
}
