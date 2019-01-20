import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public msg:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient:HttpClient) { }

  executeHelloWorldBeanService(name){
    return this.httpClient.get<HelloWorldBean>(`http://localhost:9020/hello-world/${name}`);
  }
}
