import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from '../services/login.service';
// import {xml2js} from "xml2js"; 
import * as xml2js from 'xml2js';
import { parseString } from 'xml2js';
import { promise } from 'protractor';
import { Parser } from '@angular/compiler/src/ml_parser/parser';
// import { resolve } from 'url';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  public token: any;
 

  constructor(private fb: FormBuilder, private loginservice: LoginService) {
    this.loginForm = this.fb.group({
      u: [""],
      pw: [""]
    });

  }
 

  onsubmit() {
    console.log(this.loginForm.value);
    this.loginservice.login(this.loginForm.get("u").value, this.loginForm.get("pw").value).subscribe(data => {    
    //   var parseString = require('xml2js');

    //   var parser = require('xml2js');
    //   var json = parser.toJson(data);
    //   console.log("to json -> %s", json);
      
    //   var x2js = new xml2js(data);
  
    //   var aftCnv = x2js.xml2js();
    // console.log(aftCnv);

    //   if(data!=null){
    //    console.log(data);
    //   }

     
    //   else{
    //     console.log('Empty');
    //   }
     // parseString(data, (err, result) => {
       

        // this.loginservice.user(this.token)
        //   .subscribe(
        //     () => {
        //       console.log('Enregistrement terminé !');
        //     },
        //     (error) => {
        //       console.log('Erreur ! : ' + error);
        //     }
        //   );
      // });
    

console.log(data);
      
    });
    console.log(this.token);
  }


  ngOnInit() {
    
  }
  }



