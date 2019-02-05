import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private httpClient: HttpClient) { }

  authenticate(username, password) {
    if (username === "Jan" && password === "password") {
      sessionStorage.setItem('authenticatedUser', username);
      return true
    }
    return false
  }

  executeBasicAuthenticationService(username, password) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({ Authorization: basicAuthHeaderString })

    return this.httpClient.get<AuthenticationBean>(`http://localhost:9020/basicauth`, { headers });
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return (user != null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
  }
}

export class AuthenticationBean {
  constructor(public message: string) { }
}