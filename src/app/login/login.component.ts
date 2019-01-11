import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  handleLogin() {
    console.log("Username: " + this.username);
    this.validateUserCredentials()
  }

  private validateUserCredentials() {
    if (this.username === "Jan" && this.password === "") {
      this.isValidLogin = true
    } else {
      this.isValidLogin = false
    }
  }
}
