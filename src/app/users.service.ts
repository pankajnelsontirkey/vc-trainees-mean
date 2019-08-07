import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  private api = " http://localhost:3000/persons";
  constructor(private http: HttpClient) {}
  listOfUsers(): Observable<any> {
    return this.http.get(this.api);
  }
  deleteUsers(id: number): Observable<any> {
    const url = `${this.api}/${id}`;
    return this.http.delete(url);
  }
  postUsers(payload): Observable<any> {
    return this.http.post(this.api, payload);
  }
}
