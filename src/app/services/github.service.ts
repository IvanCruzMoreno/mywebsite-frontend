import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BASE_ENDPOINT } from '../config/app';
import { GitHubProject } from '../models/git-hub-project';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private baseEndPoint = BASE_ENDPOINT + '/repos';

  constructor(private http: HttpClient) { }

  public getAllReposWithDescription(): Observable<GitHubProject[]>{
    return this.http.get<GitHubProject[]>(`${this.baseEndPoint}/description`);
  }

}
