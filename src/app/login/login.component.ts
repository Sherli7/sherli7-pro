import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from '../services/login.service';
 import {NgxXml2jsonService} from 'ngx-xml2json';
// import {xml2js} from "xml2js"; 
// import * as xml2js from 'xml2js';
// import { parseString } from 'xml2js';
// import { promise } from 'protractor';
// import { Parser } from '@angular/compiler/src/ml_parser/parser';
import { from } from 'rxjs';
// import { resolve } from 'url';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  token:any;
  constructor(private fb: FormBuilder, private loginservice: LoginService,private ngxXML2json: NgxXml2jsonService) {
    this.loginForm = this.fb.group({
      u: [""],
      pw: [""]
    });
  }
  onsubmit() {
    console.log(this.loginForm.value);
    this.loginservice.login(this.loginForm.get("u").value,this.loginForm.get("pw").value).subscribe(data => {    
    console.log(data);
    const parser=new DOMParser();
    const xml=parser.parseFromString(data,'text/html');
    const obj=this.ngxXML2json.xmlToJson(xml);
    this.token=obj['HTML'].BODY.TICKET;
    this.loginservice.setToken(this.token);
    console.log(obj['HTML'].BODY.TICKET);
      });
  }
  ngOnInit() {
    
  }
  }



