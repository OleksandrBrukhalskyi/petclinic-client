import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MAT_DIALOG_DATA } from '@angular/material';
import { Visit } from 'src/app/model/visit.model';
import { VisitService } from 'src/app/services/visit.service';

@Component({
  selector: 'app-delete-visit-modal',
  templateUrl: './delete-visit-modal.component.html',
  styleUrls: ['./delete-visit-modal.component.scss']
})
export class DeleteVisitModalComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(public dialogRef: MatDialogRef<DeleteVisitModalComponent>, @Inject(MAT_DIALOG_DATA) public visit: Visit,private visitService: VisitService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  delete(id: number) {
    this.visitService.delete(id).subscribe(() => {
      this.openSnackBarAfterVisitDelete()
    })
  }
  openSnackBarAfterVisitDelete(){
    this.snackBar.open('The visit was successfully deleted!', 'Ok',{
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });

  }


}
