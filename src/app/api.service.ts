import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private link = "http://localhost:3000"
  constructor(private http: HttpClient) { }


  signUpFetch(): Observable<any> {
    return this.http.get(this.link + '/users')
  }

  signUpGet(payload): Observable<any> {


    return this.http.post(this.link + '/users', payload)
  }




}
