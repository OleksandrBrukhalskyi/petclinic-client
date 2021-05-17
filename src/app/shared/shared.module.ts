import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatButtonModule, MatCardModule, MatDialogModule, MatDialogRef, MatDividerModule, MatFormFieldControl, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { CdkTableModule } from "@angular/cdk/table";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './widgets/card/card.component';
import { ModalComponent } from '../modules/owners/modal/modal.component';
import { ModalUpdateComponent } from '../modules/owners/modal-update/modal-update.component';
import { AddPetModalComponent } from '../modules/pets/add-pet-modal/add-pet-modal.component';
import { AddModalComponent } from '../modules/veterinarians/add-modal/add-modal.component';
import { UpdateModalComponent } from '../modules/veterinarians/update-modal/update-modal.component';
import { AddSpecialtyModalComponent } from '../modules/specialties/add-specialty-modal/add-specialty-modal.component';
import { UpdateSpecialtyModalComponent } from '../modules/specialties/update-specialty-modal/update-specialty-modal.component';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { PieComponent } from './widgets/pie/pie.component';
import { ColumnComponent } from './widgets/column/column.component';
import { AddVisitModalComponent } from '../modules/visits/add-visit-modal/add-visit-modal.component';
import { UpdateVisitModalComponent } from '../modules/visits/update-visit-modal/update-visit-modal.component';
import { DeleteVisitModalComponent } from '../modules/visits/delete-visit-modal/delete-visit-modal.component';
import { DeleteModalVetComponent } from '../modules/veterinarians/delete-modal-vet/delete-modal-vet.component';
import { ModalOwnerDeleteComponent } from '../modules/owners/modal-owner-delete/modal-owner-delete.component';
import { DeletePetModalComponent } from '../modules/pets/delete-pet-modal/delete-pet-modal.component';
import { UpdatePetModalComponent } from '../modules/pets/update-pet-modal/update-pet-modal.component';
import { DeleteSpecialtyModalComponent } from '../modules/specialties/delete-specialty-modal/delete-specialty-modal.component';
import { SpecialtiesComponent } from '../modules/specialties/specialties.component';
import { VeterinariansComponent } from '../modules/veterinarians/veterinarians.component';
import { VisitsComponent } from '../modules/visits/visits.component';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CardComponent,
    AreaComponent,
    PieComponent,
    ColumnComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    MatSortModule,
    MatTableModule,
    CdkTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    HighchartsChartModule
   







  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MatTableModule,
    CdkTableModule,
    MatSortModule,
    MatIconModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    CardComponent,
    AreaComponent,
    PieComponent,
    ColumnComponent,
    MatDialogModule,

   


  ],
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
    UpdateVisitModalComponent,
    ModalComponent,
    ModalUpdateComponent,
    DeleteModalVetComponent

    
  ]
})
export class SharedModule { }
