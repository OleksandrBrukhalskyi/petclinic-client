import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { OwnersComponent } from 'src/app/modules/owners/owners.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatDividerModule, MatSidenavModule} from '@angular/material';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    OwnersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule
    
  ]
})
export class DefaultModule { }
