import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  constructor(private  httpClient:HttpClient,private userServ:UsersService,) { 
  }

  getUsers(){
    let jeton=localStorage.getItem('token');
   return this.httpClient.get(this.userServ.uri+'api/people?alf_ticket='+jeton);
  }
  
  deleteUser(del){

  }
 
}
