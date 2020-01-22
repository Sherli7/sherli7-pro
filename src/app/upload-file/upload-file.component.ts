import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FolderService } from '../services/folder.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
uploadFileForm:FormGroup
upform:any;
public file;
public uploadFiles:Array<File>;
  constructor( private folderService:FolderService) {
   }

  ngOnInit() {
  }

  fileChange(event){
    this.uploadFiles=event.target.files;
  }

upload(){
  const formData=new FormData();
  formData.append('filedata',this.uploadFiles[0]);
  formData.append('destination',"shared");
  formData.append('uploaddirectory',"verser");
  this.folderService.uploadFile(formData).subscribe(data=>{
console.log(data);
  });
}

  
                    
                    

}
