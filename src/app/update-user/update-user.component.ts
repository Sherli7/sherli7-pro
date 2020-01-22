import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { UtilisateursService } from '../services/utilisateurs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  
userForm:FormGroup
user:any;
  constructor(private usr:FormBuilder,private userservice:UsersService,private utilisateur:UtilisateursService,
    private route:ActivatedRoute) { 
    this.userForm = this.usr.group({
      userName: [""],
      firstName: [""],
      lastName: [""],
      mobile: [""],
      email: [""],
    });
   }

  ngOnInit() {
    //this.user=this.showUsers();
    // this.route.paramMap.subscribe(params=>{
    //   params.get('username');
    //   console.log(params);
    // });

    console.log(this.userservice.donnees);
  }

  updateUser(){
    this.userservice.update(
      this.userForm.value
      ).subscribe(data=>{
        console.log(data);
      });
  }

  // onsubmit() {
  //   //console.log(this.userForm.value);
  //     this.userservice.update(
  //     this.userForm.value
  //     ).subscribe(data=>{
  //       //console.log(data);
  //     });
  //   }

    check(event){
      event.target.username;
    }

    showUsers(){
      this.utilisateur.getUsers().subscribe(data => {
        this.usr = data['people'];
        console.log(this.usr);  
      });
    }

    PassEvent(){
    }
}
