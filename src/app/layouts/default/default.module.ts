import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { OwnersComponent } from 'src/app/modules/owners/owners.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatCardModule, MatDividerModule, MatSidenavModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';




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
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule
    
  ]
})
export class DefaultModule { }
