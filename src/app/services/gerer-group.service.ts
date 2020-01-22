import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GererGroupService {
  jeton;
  uri = 'http://localhost:8080/alfresco/api'
  constructor(private http: HttpClient) {
    this.jeton = localStorage.getItem('token');
  
  }

  OnInit(){
    console.log(this.showgroup());
  }

  createGroup(group) {
    let jeton = localStorage.getItem('token');
    let host = this.uri + "/-default-/public/alfresco/versions/1/groups?alf_ticket=" + jeton;
    console.log(group);
    return this.http.post(host, group);
  }

  deleteGroup(group) {
    //console.log(userName);
   let  hostdel = this.uri+"/-default-/public/alfresco/versions/1/groups";
    let jeton = localStorage.getItem('token');
    return this.http.delete(hostdel + group + "?alf_ticket=" + jeton);
  }
  showgroup(){
  return this.http.get(this.uri+'/-default-/public/alfresco/versions/1/groups'+ '?alf_ticket=' + this.jeton)

  }
  
getGroup(){
  return this.http.get(this.uri+'/-default-/public/alfresco/versions/1/groups?alf_ticket='+this.jeton);
 }

 

}
