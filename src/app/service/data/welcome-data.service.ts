import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JWTAuthenticationService } from '../jwt-authenticationservice';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean {
  constructor(public msg: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) { }

  executeHelloWorldBeanService(name) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    return this.httpClient.get<HelloWorldBean>(`${API_URL}/hello-world/${name}`
      // , { headers }
    );
  }
}
