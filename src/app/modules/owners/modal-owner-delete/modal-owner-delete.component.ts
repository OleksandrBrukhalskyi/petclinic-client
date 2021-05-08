import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MAT_DIALOG_DATA } from '@angular/material';
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
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  
  constructor(public dialogRef: MatDialogRef<ModalOwnerDeleteComponent>, @Inject(MAT_DIALOG_DATA) public owner: Owner, public ownerService: OwnerService,private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  delete(id:any) {
    this.ownerService.delete(id).subscribe(() => {
      this.openSnackBarAfterOwnerDelete();
    });
  } 
  openSnackBarAfterOwnerDelete(){
    this._snackBar.open('The owner was successfully deleted!', 'Ok',{
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });

  }
  
}
