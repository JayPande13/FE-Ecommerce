import { Injectable } from "@angular/core";
import { NzModalService } from "ng-zorro-antd/modal";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ModalBuilderService {
  data$:Subject<unknown>;
  afterModalOpen: BehaviorSubject<unknown>;
  constructor(private modalService: NzModalService) {
    this.data$=new Subject<unknown>;
    this.afterModalOpen = new BehaviorSubject<unknown>(null);

  }

  openModal(modalContent:any, modalParams?:object,modalTitle?:string,width?:number,extraData?:string) {
   const createdModal= this.modalService.create({
      nzTitle: modalTitle,
      nzContent: modalContent,
      nzComponentParams:modalParams,
      nzWidth: width,
      nzFooter: [
        {
          label: "Close",
          onClick: (componentInstance) => {
            this.closeAll();
          },
        },
      ],
    });
    createdModal.afterOpen.subscribe(()=>{
      this.afterModalOpen.next(extraData);
    })
    createdModal.afterClose.subscribe((data)=>{
      this.data$.next(data);
    })
    return this.data$;
  }


  closeAll(){
    this.modalService.closeAll();
  }
}
