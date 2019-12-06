import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user:any;

 
  host="http://localhost:8080/alfresco/s/api/people?alf_ticket=TICKET_66125c8ffc645f0995b68e6897d7acf803bf9d3c";
  constructor(private http:HttpClient) { }
  saveUser(user){
    console.log(user);
    return this.http.post(this.host,user);
}
}