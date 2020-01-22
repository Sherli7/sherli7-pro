import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user:any;
  token:any;
  uri="http://localhost:8080/alfresco/service/api/login";
  host="http://192.168.0.187:8080/alfresco/s/api/login";
  constructor(private http:HttpClient) { }

 

  login(user,pw){
    console.log(user,pw);
    return this.http.get(this.uri+'?u='+ user+'&pw='+pw,{  
      headers: new HttpHeaders()  
        .set('Content-Type', 'text/xml'),
        responseType: 'text'  
    });
    }  
    getToken(){
      this.token=localStorage.getItem('token');
    }
    setToken(jeton){
      localStorage.setItem('token',jeton);
    }
    givenToken(){
      return localStorage.getItem('token');
    }
}
 