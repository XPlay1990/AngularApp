import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {

  public routerLinkVariable = "/welcome"; 

  constructor(private basicAuthService: BasicAuthenticationService) { }

  ngOnInit() {
  }
}
