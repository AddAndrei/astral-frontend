import { Component, OnInit } from '@angular/core';
import {DataService} from "../service/data.service";

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.css']
})
export class MedicalHistoryComponent implements OnInit {

  medicalHistory:any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData(){
    await this.dataService.getData('/history').subscribe((res:any)=>{
      this.medicalHistory = res
    });
  }





}
