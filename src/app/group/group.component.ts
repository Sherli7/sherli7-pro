import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GererGroupService } from '../services/gerer-group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  groupForm:FormGroup
  idname:any
  constructor(private grp:FormBuilder, private gererGroup:GererGroupService) {
this.groupForm=this.grp.group({
    isRoot: true,
    displayName: [""],
    id: [""]
});
   }

  ngOnInit() {
    this.gererGroup.getGroup().subscribe(data => {
      this.idname = data['list'].entries;   
      console.log(data);
      console.log(this.idname);
    });
  }
  onsubmit() {
    this.gererGroup.createGroup(this.groupForm.value).subscribe(data=>{
      console.log(data);
    });
    }

    getId(){
    
    }
    recordGroup(){
      this.gererGroup.createGroup(this.groupForm.value).subscribe();
    }

    check(event){

    }
    deleteRow(group) {  
      console.log(group)  
    this.gererGroup.deleteGroup(group).subscribe(data => {
    }); 
  }
}
