import { Injectable } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private API_END_POINTS = "http://localhost:3000"
  constructor(private http: HttpClient) {
   }

   listOfEvents (): Observable<any> {
    return this.http.get(this.API_END_POINTS + '/events')
   }


}
