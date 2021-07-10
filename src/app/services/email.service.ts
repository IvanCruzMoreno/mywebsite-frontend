import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_ENDPOINT } from '../config/app';

import { Email } from '../models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private cabeceras: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private baseEndPoint = BASE_ENDPOINT + '/email';
  
  constructor(private http: HttpClient) { }

  public sendEmail(email: Email): Observable<Email>{
    return this.http.post<Email>(`${this.baseEndPoint}`, email, {headers: this.cabeceras});
  }
}
