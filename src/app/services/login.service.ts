import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'http://localhost:3000/login';

  constructor(private httpClient: HttpClient) {}

  //No login usa post pra fazer a requisção pq as infos vão pelo body da requisição e não pela Url.
  login(user: Login): Observable<any> {
    return this.httpClient.post(this.url, JSON.stringify(user), {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response',
    });
  }
}
