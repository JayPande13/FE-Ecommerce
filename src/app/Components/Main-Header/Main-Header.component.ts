import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-Main-Header',
  templateUrl: './Main-Header.component.html',
  styleUrls: ['./Main-Header.component.css']
})
export class MainHeaderComponent implements OnInit {
  collapsed = false;

  constructor(private routes:ActivatedRoute,private router:Router) {
   }

  ngOnInit() {
  }
  public onCollapseChange(event:any){
    this.collapsed= event;
    
  }
  navigate(){
    this.router.navigate(['/sign-up'])  }

}
