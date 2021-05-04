import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 
  amount: Observable<any>;
  constructor( public ownerService: OwnerService) { }

  ngOnInit() {
    this.amount = this.ownerService.getQuantity();
    
  }

  
}
