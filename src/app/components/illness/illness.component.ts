import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../service/data.service";
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../modal/modal.component";
import { DatePipe } from "@angular/common";
@Component({
  selector: 'app-illness',
  templateUrl: './illness.component.html',
  styleUrls: ['./illness.component.css']
})
export class IllnessComponent implements OnInit {

  illness:any;
  diagnoses:any;
  id:any;
  date:any;

  constructor(private route:ActivatedRoute,
              private dataService:DataService,
              readonly router:Router,
              private matDialog:MatDialog) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  async getData(){
    await this.dataService.getData('/history/illness/'+this.id).subscribe((res:any)=>{
      this.illness = res;
    });
    await this.dataService.getData('/diagnoses').subscribe((res:any) => {
      this.diagnoses = res;
    });
  }

  openModal(){
    this.matDialog.open(ModalComponent, {
      data:{
        diagnoses: this.diagnoses,
        id:this.id,
        diagnose:this.illness[0].diagnose_id
      }
    });
  }
  deleteIllness(){
    this.dataService.postData('/history/illness/delete/', {id:this.id}).subscribe((res:any)=>{
      this.router.navigateByUrl('medical-history')
    })
  }
}



















