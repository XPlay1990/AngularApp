import { Component, OnInit } from '@angular/core';
import { VersionService } from '../service/data/VersionService';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  gitVersion: string


  constructor(private versionService: VersionService) { }

  ngOnInit() {
    this.getGitVersion();
  }


  getGitVersion() {
    this.versionService.executeGetGitVersion().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response) {
    this.gitVersion = response.version;
  }

  handleErrorResponse(error) {
    this.gitVersion = error.error.message
  }
}
