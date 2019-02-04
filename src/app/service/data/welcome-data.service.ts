import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public msg: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) { }

  executeHelloWorldBeanService(name) {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    let headers = new HttpHeaders({ Authorization: basicAuthHeaderString })

    return this.httpClient.get<HelloWorldBean>(`http://localhost:9020/hello-world/${name}`, { headers });
  }

  createBasicAuthenticationHttpHeader() {
    let username = 'Jan';
    let password = 'password';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString
  }
}
