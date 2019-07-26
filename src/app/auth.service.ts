import { Injectable } from '@angular/core';
import { User } from './user';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = 'http://localhost:3000';/* i have added this variable to use localhost for running http client services in my module */

  constructor(private httpClient: HttpClient) { }/* code to be continued from here after sometime */
   public login(userInfo:User){
     localStorage.setItem('ACCESS_TOKEN',"access_token");

   }

public isLoggedIn(){
  return localStorage.getItem('ACCESS_TOKEN')!==null;

}
 
public LoggedOut(){
localStorage.removeItem('ACCESS_TOKEN');
}
}