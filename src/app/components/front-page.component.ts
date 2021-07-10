import { Component, OnInit } from '@angular/core';
import { GitHubProject } from '../models/git-hub-project';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  tituloRepos: string = "Recent Projects";
  reposWithDescription: GitHubProject[] = [];

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getAllReposWithDescription().subscribe( reposR => {
      this.reposWithDescription = reposR.map( repoR => {
        if(repoR.language == null){
          repoR.language = "Root Project";
        }
        return repoR;
      });
      
    });
  }

}
