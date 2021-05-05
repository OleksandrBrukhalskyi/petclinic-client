import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OwnerService } from 'src/app/services/owner.service';
import { PetService } from 'src/app/services/pet.service';
import { VisitService } from 'src/app/services/visit.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 
  amountOfOwners: Observable<any>;
  amountOfPets: Observable<any>;
  income: Observable<any>;

  constructor( public ownerService: OwnerService,public petService: PetService, public visitService: VisitService) { }

  ngOnInit() {
    this.amountOfOwners = this.ownerService.getQuantity();
    this.amountOfPets = this.petService.amountOfPets();
    this.income = this.visitService.income();


    
  }

  
}
