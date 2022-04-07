import { Component, OnInit } from '@angular/core';
import {DataService} from "../../service/data.service";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients:any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getPatientsData();
  }
  async getPatientsData(){
    await this.dataService.getData('/patients').subscribe(res=>{
      this.patients = res;
    });
  }
}

















