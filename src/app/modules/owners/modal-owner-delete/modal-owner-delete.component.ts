import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Owner } from 'src/app/model/owner.model';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-modal-owner-delete',
  templateUrl: './modal-owner-delete.component.html',
  styleUrls: ['./modal-owner-delete.component.scss']
})
export class ModalOwnerDeleteComponent implements OnInit {

  dataSource: any;
  owners: any;
  constructor(public dialogRef: MatDialogRef<ModalOwnerDeleteComponent>, @Inject(MAT_DIALOG_DATA) public owner: Owner, public ownerService: OwnerService) { }

  ngOnInit() {
  }

  delete(id:any) {
    this.ownerService.delete(id).subscribe(() => {
      
    });
  } 
  
}
