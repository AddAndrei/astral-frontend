import { Component, OnInit } from '@angular/core';
import {DataService} from "../../service/data.service";

import {DatePipe} from "@angular/common";
import {Router} from "@angular/router";


@Component({
  selector: 'app-add-case-of-illness',
  templateUrl: './add-case-of-illness.component.html',
  styleUrls: ['./add-case-of-illness.component.css'],
  providers: [DatePipe]
})
export class AddCaseOfIllnessComponent implements OnInit {
  patients:any;

  diagnoses:any;

  data:any = {
    patient_id:'',
    open_date:'',
    diagnose_id:null,
  }

  constructor(private dataService:DataService,
              private datePipe:DatePipe,
              readonly router:Router) {}

  ngOnInit(): void {
    this.getPatientsAndDiagnoses();
    this.data.open_date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  async getPatientsAndDiagnoses(){
    await this.dataService.getData('/diagnoses').subscribe((res:any) => {
      this.diagnoses = res;
      this.data.patient_id = res[0].id;
    });
    await this.dataService.getData('/patients').subscribe(res => {
      this.patients = res;

    });

  }

  createIllness(){
    this.dataService.postData('/history/create', this.data).subscribe((res:any)=>{
      if (res) {
        this.router.navigateByUrl('medical-history')
      }
    });
  }
}
