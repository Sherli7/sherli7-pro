import { Component, OnInit } from '@angular/core';
import { FolderService } from '../services/folder.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {



  public file;
  public uploadFiles:Array<File>;
  fileupload:FormGroup
  constructor(private formfile:FormBuilder,private folderService:FolderService) {
this.fileupload=this.formfile.group({
  filedata:[""],
  siteid:[""],
  containerid:[""],
  uploaddirectory:[""],
  description:[""],
  contenttype:[""],
});

   }

  ngOnInit() {
  }
  fileChange(event){
    this.uploadFiles=event.target.files;
    const formData=new FormData();
    formData.append('filedata',this.uploadFiles[0]);
    formData.append('siteid',"testDev");
    formData.append('containerid',"documentLibrary");
    formData.append('uploaddirectory',"verser");
    this.folderService.uploadFile(formData).subscribe(data=>{
  console.log(data);
    });
  }

  upload(){
  //   const formData=new FormData();
  //   formData.append('filedata',this.uploadFiles[0]);
  //   formData.append('destination',"shared");
  //   formData.append('uploaddirectory',"verser");
  //   this.folderService.uploadFile(formData).subscribe(data=>{
  // console.log(data);
  //   });
  }

}
