import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { RegisterComponent } from './modules/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule, MatCardModule, MatChipsModule, MatCheckboxModule, MatInputModule, MatIconModule, MatButtonModule, MatRippleModule, MatDialogModule, MatExpansionModule, MatProgressSpinnerModule, MatSnackBarModule, MatToolbarModule, MatTableModule, MatTableDataSource, MatSortModule, MatPaginatorModule, MatFormFieldModule, MatSelectModule, MatDividerModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './modules/login/login.component';
import { CdkTableModule } from "@angular/cdk/table";
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ModalComponent } from './modules/owners/modal/modal.component';
import { ModalUpdateComponent } from './modules/owners/modal-update/modal-update.component';
import { PetsComponent } from './modules/pets/pets.component';
import { AddPetModalComponent } from './modules/pets/add-pet-modal/add-pet-modal.component';
import { UpdatePetModalComponent } from './modules/pets/update-pet-modal/update-pet-modal.component';
import { VeterinariansComponent } from './modules/veterinarians/veterinarians.component';
import { AddModalComponent } from './modules/veterinarians/add-modal/add-modal.component';
import { UpdateModalComponent } from './modules/veterinarians/update-modal/update-modal.component';
import { SpecialtiesComponent } from './modules/specialties/specialties.component';
import { AddSpecialtyModalComponent } from './modules/specialties/add-specialty-modal/add-specialty-modal.component';
import { UpdateSpecialtyModalComponent } from './modules/specialties/update-specialty-modal/update-specialty-modal.component';
import { ModalOwnerDeleteComponent } from './modules/owners/modal-owner-delete/modal-owner-delete.component';
import { DeletePetModalComponent } from './modules/pets/delete-pet-modal/delete-pet-modal.component';
import { DeleteSpecialtyModalComponent } from './modules/specialties/delete-specialty-modal/delete-specialty-modal.component';

import { HighchartsChartModule } from 'highcharts-angular';
import { VisitsComponent } from './modules/visits/visits.component';
import { AddVisitModalComponent } from './modules/visits/add-visit-modal/add-visit-modal.component';
import { UpdateVisitModalComponent } from './modules/visits/update-visit-modal/update-visit-modal.component';
import { DeleteVisitModalComponent } from './modules/visits/delete-visit-modal/delete-visit-modal.component';
import { DeleteModalVetComponent } from './modules/veterinarians/delete-modal-vet/delete-modal-vet.component';







@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ModalComponent,
    ModalUpdateComponent,
    PetsComponent,
    AddPetModalComponent,
    UpdatePetModalComponent,
    VeterinariansComponent,
    AddModalComponent,
    UpdateModalComponent,
    SpecialtiesComponent,
    AddSpecialtyModalComponent,
    UpdateSpecialtyModalComponent,
    ModalOwnerDeleteComponent,
    DeletePetModalComponent,
    DeleteSpecialtyModalComponent,
    VisitsComponent,
    AddVisitModalComponent,
    UpdateVisitModalComponent,
    DeleteVisitModalComponent,
    DeleteModalVetComponent,
    



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    MatRadioModule,
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatDialogModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSortModule,
    MatTableModule,
    CdkTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatDividerModule,
    HighchartsChartModule,


  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddPetModalComponent,
    UpdatePetModalComponent,
    VeterinariansComponent,
    AddModalComponent,
    UpdateModalComponent,
    SpecialtiesComponent,
    AddSpecialtyModalComponent,
    UpdateSpecialtyModalComponent,
    ModalOwnerDeleteComponent,
    DeletePetModalComponent,
    DeleteSpecialtyModalComponent,
    VisitsComponent,
    AddVisitModalComponent,
    UpdateVisitModalComponent,
    DeleteVisitModalComponent,
    DeleteModalVetComponent
  ]
})
export class AppModule { }
