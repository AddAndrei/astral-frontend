import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DatePipe} from "@angular/common";
import {DataService} from "../../service/data.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [DatePipe]
})
export class ModalComponent implements OnInit {

  date:any;
  diagnose_id:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
              private datePipe:DatePipe,
              private dataService:DataService,
              private router:Router) {}

  ngOnInit(): void {
    this.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.diagnose_id = this.data.diagnose
  }

  updateIllness(){
    this.dataService.put('/history/illness/update', {
      id:this.data.id,
      diagnose_id:this.diagnose_id,
      close_date:this.date
    }).subscribe((res:any)=>{
      if (res) {
        window.location.reload();
      }
    });

  }

}
