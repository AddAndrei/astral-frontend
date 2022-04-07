import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsComponent } from './components/patients/patients.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from "@angular/common/http";
import { AddCaseOfIllnessComponent } from './components/add-case-of-illness/add-case-of-illness.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MedicalHistoryComponent } from './medical-history/medical-history.component';
import { ModalComponent } from './components/modal/modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import { IllnessComponent } from './components/illness/illness.component';

const appRoutes: Routes = [
  { path: '', component:PatientsComponent },
  { path: 'addcase', component:AddCaseOfIllnessComponent},
  { path: 'medical-history', component: MedicalHistoryComponent},
  { path: 'illness/:id', component: IllnessComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    NavbarComponent,
    AddCaseOfIllnessComponent,
    FooterComponent,
    MedicalHistoryComponent,
    ModalComponent,
    IllnessComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDatepickerModule,
    FormsModule,
    MatDialogModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
