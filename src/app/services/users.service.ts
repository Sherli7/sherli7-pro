import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  hostdel="http://localhost:8080/alfresco/s/api/people/";
 
  host="http://localhost:8080/alfresco/s/api/people?alf_ticket=TICKET_eebf6f24c8737b7efae6ab8e74d59fdf7feb1809";
  constructor(private http:HttpClient) { }
  saveUser(user){
    console.log(user);
    return this.http.post(this.host,user);
}

deleteUser(user){
 //console.log(userName);
    return this.http.delete(this.hostdel+user+"?alf_ticket=TICKET_eebf6f24c8737b7efae6ab8e74d59fdf7feb1809");
}
}  