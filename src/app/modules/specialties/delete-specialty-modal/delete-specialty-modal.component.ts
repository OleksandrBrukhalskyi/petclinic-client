import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MAT_DIALOG_DATA } from '@angular/material';
import { Specialty } from 'src/app/model/specialty.model';
import { SpecialtyService } from 'src/app/services/specialty.service';

@Component({
  selector: 'app-delete-specialty-modal',
  templateUrl: './delete-specialty-modal.component.html',
  styleUrls: ['./delete-specialty-modal.component.scss']
})
export class DeleteSpecialtyModalComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(public dialogRef: MatDialogRef<DeleteSpecialtyModalComponent>, @Inject(MAT_DIALOG_DATA) public specialty: Specialty,
              private specialtyService: SpecialtyService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  delete(id: number) {
    this.specialtyService.delete(id).subscribe(() => {
      this.openSnackBarAfterSpecialtyDelete()
    })
  }
  openSnackBarAfterSpecialtyDelete(){
    this.snackBar.open('Спеціальність успішно видалено!', 'Ok',{
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });

  }
}
