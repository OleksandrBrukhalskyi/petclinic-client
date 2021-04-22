import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( public ownerService: OwnerService) { }

  ngOnInit() {
  }

}
