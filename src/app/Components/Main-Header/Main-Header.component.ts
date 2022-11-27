import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ModalBuilderService } from 'src/app/Services/modal-builder.service';
import { SignUpComponent } from '../Sign-Up/Sign-Up.component';

@Component({
  selector: 'app-Main-Header',
  templateUrl: './Main-Header.component.html',
  styleUrls: ['./Main-Header.component.css']
})
export class MainHeaderComponent implements OnInit {
  collapsed = false;

  constructor(private routes:ActivatedRoute,private router:Router,private modal: ModalBuilderService) {
   }

  ngOnInit() {
  }
  public onCollapseChange(event:any){
    this.collapsed= event;
   
    
  }
  navigate(){
    this.modal.openModal(SignUpComponent,{
      data:[]
    },'Sign Up',700).subscribe((res:any)=>{
      console.log({res})
    })
   }

}
