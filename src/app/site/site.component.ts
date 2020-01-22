import { Component, OnInit,Input} from '@angular/core';
import { SiteService } from '../services/site.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {
site:any
usr:any;
selectedSite:any;
  @Input() masterName: any;
  constructor(private siteservice:SiteService) { 
    this.masterName=this.check(event);
  }

  ngOnInit() {
    this.showSite();
  }
  showSite(){
    this.siteservice.showSite().subscribe(data => {
      this.site=data;
      console.log(this.site);  
    });
  }

  check(event){                                                   
    this.selectedSite=event.target.shortName;
    console.log(this.selectedSite);
    }                                                     
    

  deleteSite(del){
return this.siteservice.deleteSite(del).subscribe(data=>{});
  }
  updateSite(site){
return this.siteservice.updateSite(site).subscribe(data=>{
this.check(site);
});
  }


  createSite(){
    
  }
  
  

}
