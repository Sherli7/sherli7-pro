import { Component, OnInit } from '@angular/core';
import { FolderService } from '../services/folder.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {
  folderForm: FormGroup
  f:any
  counter:number
  constructor(private fb: FormBuilder, private folderServie: FolderService, private http: HttpClient) {
    this.folderForm = this.fb.group({
      name: [""],
      nodeType: ["cm:folder"],
      title: [""],
      description: [""]
    });
  }

  ngOnInit() {
this.showFolder();
  }

  showFolder(){
    this.folderServie.getFolder().subscribe(data => {
      this.f = data['list'].entries;
      console.log(data);
      console.log(this.f);
    });
  }

  onsubmit() {
    //console.log(this.userForm.value);
    this.folderServie.saveFolder(
      this.folderForm.value
    ).subscribe(data => {
      console.log(data);
    });
  }

  ondeleteFolder(){

  }
  // onsubmit() {
  //   console.log(this.folderForm.value);
  //   this.folderServie.saveFolder(this.folderForm.get("name")).subscribe(data => {    
  //   console.log(data);
  //     });
  // }
}





