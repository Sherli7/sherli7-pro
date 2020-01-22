import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class FolderService {
  //uri='http://192.168.0.187:8080/alfresco/';
  uri='http://localhost:8080/alfresco/';

  jeton = localStorage.getItem('token');
  constructor(private http:HttpClient) {
    
  }
saveFolder(folde) {
  let host = this.uri+"api/-default-/public/alfresco/versions/1/nodes/-shared-/children?alf_ticket="+this.jeton;
  console.log(folde);
  return this.http.post(host, folde);
}

getFolder(){
return this.http.get(this.uri+'api/-default-/public/alfresco/versions/1/nodes/-shared-/children?alf_ticket='+this.jeton);
} 

updloadFolder(){
  let host=this.uri
}



uploadFile(formData){
  const settings ={
    header:{
      'cache-control':'no-cache',
    },
    'data':formData
  };
  console.log(settings);
  return this.http.post(this.uri+'service/api/upload?alf_ticket='+this.jeton, settings  );
}



  }