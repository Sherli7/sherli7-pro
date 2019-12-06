import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { type } from 'os';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user:any;
 
  host="http://localhost:8080/alfresco/s/api/login";
  constructor(private http:HttpClient) { }

 

  login(user,pw){
    console.log(user,pw);
    return this.http.get(this.host+'?u='+ user+'&pw='+pw,{  
      headers: new HttpHeaders()  
        .set('Content-Type', 'text/xml'),
        responseType: 'text'  
    });
    }

    
  

  


  
}
 