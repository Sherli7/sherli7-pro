import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  uri = 'http://localhost:8080/alfresco/s/';
  donnees:any;
  jeton = "";
  //uri = 'http://192.168.0.187:8080/alfresco/s/'
  constructor(private http: HttpClient) {
    this.jeton = localStorage.getItem('token');
  }

  showUser() {
    return this.http.get(this.uri + 'api/people?alf_ticket=' + this.jeton);

  }
  saveUser(user) {
    let host = this.uri + "api/people?alf_ticket=" + this.jeton;
    console.log(user);
    return this.http.post(host, user);
  }

  update(user) {
    let host = this.uri + "api/people?alf_ticket=" + this.jeton;
    console.log(user);
    return this.http.put(host, user);
  }

  deleteUser(user) {
    //console.log(userName);
    let hostdel = this.uri + "api/people/";
    return this.http.delete(hostdel + user + "?alf_ticket=" + this.jeton);
  }
}  