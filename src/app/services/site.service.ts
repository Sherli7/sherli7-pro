import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
uri='http://localhost:8080/alfresco/s/api/sites'
jeton:any
  constructor(private http:HttpClient) {
    this.jeton=localStorage.getItem('token');
   }

  showSite(){
    return this.http.get(this.uri + '?alf_ticket=' + this.jeton);
  }

  saveSite(site){
    console.log(site);
return this.http.post(this.uri+"?alf_ticket="+this.jeton,site)
  }

  
  deleteSite(site){
console.log(site);
    return this.http.delete(this.uri+'/' + site + "?alf_ticket=" + this.jeton);
  }

  updateSite(site){
    return this.http.put(this.uri+'/'+site+"?alf_ticket="+this.jeton,site);
  }

 
}
