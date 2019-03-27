import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JWTAuthenticationService as JWTAuthenticationService } from '../service/jwt-authenticationservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "XPlay"
  password = "rawPassword1234!ä#"
  errormessage = "Invalid credentials!"
  isValidLogin = true

  constructor(
    private router: Router,
    private jwtAuthService: JWTAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    this.handleJWTAuthLogin()
  }

  private handleJWTAuthLogin() {
    this.jwtAuthService.executeJWTAuthenticationService(this.username, this.password).subscribe(
      data => {
        this.isValidLogin = true
        this.router.navigate(['welcome', this.username])
      },
      error => {
        console.log(error);
        this.isValidLogin = false
      }
    )
  }
}
