import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public saveUser(user: any): Observable<any> {
    const url = 'https://my-json-server.typicode.com/danieljames08/ticketSystem/details';
    return this.http.post<any>(url, user);
  }
}
