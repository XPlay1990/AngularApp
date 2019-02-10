import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

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

  constructor(
    private router: Router,
    private basicAuthService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    this.handleBasicAuthLogin()
  }

  private handleBasicAuthLogin() {
    this.basicAuthService.executeBasicAuthenticationService(this.username, this.password).subscribe(
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
