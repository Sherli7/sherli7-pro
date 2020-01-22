import { Component, OnInit, Input } from '@angular/core';
import { UtilisateursService } from '../services/utilisateurs.service';
import { UsersService } from '../services/users.service';
import { FileuploadComponent } from '../fileupload/fileupload.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']  
})
export class ListUsersComponent implements OnInit {
userElem:any;
usr:any;
resp:any
selectedU:any;
usertoUp:any
  constructor(private utilisateursService:UtilisateursService,private usersservice:UsersService) {

  }
  ngOnInit() {
   this.showUsers()
  }

  showUsers(){
    this.usersservice.showUser().subscribe(data => {
      this.usr = data['people'];
      console.log(this.usr);  
    });
  }
 
  deleteRow(userName) {  
    console.log(userName)  
  this.usersservice.deleteUser(userName).subscribe(data => {
  });                                           

}                                                             

check(event){                                                   
this.selectedU=event.target.username;                                                               
console.log(this.selectedU);
}                                                     


updateUser(usertoUp){                                       
  const obj=this.usr.filter(resp=>resp.userName===usertoUp);  
  //console.log(obj+"ok"); 
  this.usersservice.donnees=obj;
  console.log(this.usersservice.donnees);
  console.log('verifions ici');
}

childEvent(){
  console.log();
}
  
}
