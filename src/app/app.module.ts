import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { RegisterComponent } from './modules/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule, MatCardModule, MatChipsModule, MatCheckboxModule, MatInputModule, MatIconModule, MatButtonModule, MatRippleModule, MatDialogModule, MatExpansionModule, MatProgressSpinnerModule, MatSnackBarModule, MatToolbarModule, MatTableModule, MatTableDataSource, MatSortModule, MatPaginatorModule, MatFormFieldModule, MatSelectModule, MatDividerModule } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './modules/login/login.component';
import {CdkTableModule} from "@angular/cdk/table";
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { TokenInterceptor } from './services/token.interceptor';
import { FooterComponent } from './shared/components/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent
    
    
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
    MatDividerModule
    
    
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
