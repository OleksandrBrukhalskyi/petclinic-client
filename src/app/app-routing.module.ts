import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';
import { OwnersComponent } from './modules/owners/owners.component';
import { RegisterComponent } from './modules/register/register.component';


const routes: Routes = [
  {
  path: '',
  component: DefaultComponent, canActivate: [AuthGuard],
  children:[
    { path: '', component: DashboardComponent},
    { path:'owners', component: OwnersComponent}
  ],
},
{ path: 'signup',component: RegisterComponent},
{ path: 'signin', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
