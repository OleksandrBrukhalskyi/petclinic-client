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
import {CdkTableModule} from "@angular/cdk/table";
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ModalComponent } from './modules/owners/modal/modal.component';
import { ModalUpdateComponent } from './modules/owners/modal-update/modal-update.component';
import { PetsComponent } from './modules/pets/pets.component';
import { AddPetModalComponent } from './modules/pets/add-pet-modal/add-pet-modal.component';
import { UpdatePetModalComponent } from './modules/pets/update-pet-modal/update-pet-modal.component';
import { VeterinariansComponent } from './modules/veterinarians/veterinarians.component';





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
    VeterinariansComponent
    
    
    
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
    
    
    
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    {provide: MAT_DIALOG_DATA, useValue: {}},
    { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [AppComponent],
  entryComponents:[ModalComponent,ModalUpdateComponent,AddPetModalComponent,UpdatePetModalComponent]
})
export class AppModule { }
