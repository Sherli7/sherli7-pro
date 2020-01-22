import { Component, OnInit } from '@angular/core';
import { GererGroupService } from '../../services/gerer-group.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  groupForm:FormGroup
  idname:"GROUP_"
  constructor(private grp:FormBuilder, private gererGroup:GererGroupService) {
this.groupForm=this.grp.group({
    isRoot: true,
    displayName: [""],
    id: [""]
});
   }

  ngOnInit() {
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
}
