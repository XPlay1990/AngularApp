import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  private username=''
  welcomeMsgFromSpring:string
  constructor(private route:ActivatedRoute, private welcomeService:WelcomeDataService) { }

  ngOnInit() {
    this.username = this.route.snapshot.params['name']
  }

  getWelcomeFromSpring(){
    this.welcomeService.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response){
    this.welcomeMsgFromSpring = response.msg;
  }
}
