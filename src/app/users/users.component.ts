import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userForm: FormGroup;
  constructor(private usr: FormBuilder, private UsersService: UsersService) {
    this.userForm = this.usr.group({
      userName: [""],
      firstName: [""],
      lastName: [""],
      mobile: [""],
      email: [""],
      password:[""]
    });
  
  }
  
  onsubmit() {
    console.log(this.userForm.value);
      this.UsersService.saveUser(
      this.userForm.value
      ).subscribe(data=>{
        console.log(data);
      });
    }
  ngOnInit() {
  }

}
