import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SiteService } from '../../services/site.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  
siteForm:FormGroup
  constructor(private sitef:FormBuilder, private siteservice:SiteService) {
    this.siteForm=this.sitef.group({
      shortName:[""],
      title:[""],
      description:[""],
      sitePreset:["site-dashboard"]
    });
   }

  ngOnInit() {
  }

  onsubmit(){
    this.siteservice.saveSite(this.siteForm.value).subscribe();
  }

}

