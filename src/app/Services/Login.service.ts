import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

constructor(private http: HttpClient) { }

baseURL = 'http://localhost:9000/api/v1'

addNewUser(user:any){
  return this.http.post<any>(`${this.baseURL}/user/create` ,user);
}
loginUser(user:any){
  return this.http.post<any>(`${this.baseURL}/user/login` ,user);
}


}
