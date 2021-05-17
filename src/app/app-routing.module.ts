import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';
import { OwnersComponent } from './modules/owners/owners.component';
import { PetsComponent } from './modules/pets/pets.component';
import { RegisterComponent } from './modules/register/register.component';
import { SpecialtiesComponent } from './modules/specialties/specialties.component';
import { VeterinariansComponent } from './modules/veterinarians/veterinarians.component';
import { VisitsComponent } from './modules/visits/visits.component';


const routes: Routes = [
  {
  path: '',
  component: DefaultComponent, canActivate: [AuthGuard],
  children:[
    { path: '', component: DashboardComponent},
    { path: 'owners', component: OwnersComponent},
    { path: 'pets', component: PetsComponent},
    { path: 'veterinarians', component: VeterinariansComponent},
    { path: 'specialties', component:SpecialtiesComponent},
    { path:'visits', component:VisitsComponent}
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
