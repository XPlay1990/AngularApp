import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "Jan"
  password = ""
  errormessage = "Invalid credentials!"
  isValidLogin = false

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin() {
    console.log("Username: " + this.username);
    this.validateUserCredentials()
  }

  private validateUserCredentials() {
    if (this.username === "Jan" && this.password === "") {
      this.isValidLogin = true
      this.router.navigate(['welcome', this.username])
    } else {
      this.isValidLogin = false
    }
  }
}
