import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "Jan"
  password = "password"
  errormessage = "Invalid credentials!"
  isValidLogin = true

  constructor(private router: Router, private hardcodedAuthentication: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    this.validateUserCredentials()
  }

  private validateUserCredentials() {
    if (this.hardcodedAuthentication.authenticate(this.username, this.password)) {
      this.isValidLogin = true
      this.router.navigate(['welcome', this.username])
    } else {
      this.isValidLogin = false
    }
  }
}
