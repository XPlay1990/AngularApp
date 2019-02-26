import { Component, OnInit } from '@angular/core';
import { JWTAuthenticationService } from '../service/jwt-authenticationservice';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private basicAuthService: JWTAuthenticationService) { }

  ngOnInit() {
    this.basicAuthService.logout();
  }
}
