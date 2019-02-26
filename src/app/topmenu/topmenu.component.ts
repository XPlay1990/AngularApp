import { Component, OnInit } from '@angular/core';
import { JWTAuthenticationService } from '../service/jwt-authenticationservice';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {

  public routerLinkVariable = "/welcome"; 

  constructor(private basicAuthService: JWTAuthenticationService) { }

  ngOnInit() {
  }
}
