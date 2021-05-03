import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatButtonModule, MatCardModule, MatDialogRef, MatDividerModule, MatFormFieldControl, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {CdkTableModule} from "@angular/cdk/table";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './widgets/card/card.component';
import { ModalComponent } from '../modules/owners/modal/modal.component';
import { ModalUpdateComponent } from '../modules/owners/modal-update/modal-update.component';
import { AddPetModalComponent } from '../modules/pets/add-pet-modal/add-pet-modal.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CardComponent  
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
    CardComponent
    
       
  ],
  entryComponents:[ModalComponent,ModalUpdateComponent,AddPetModalComponent]
})
export class SharedModule { }
