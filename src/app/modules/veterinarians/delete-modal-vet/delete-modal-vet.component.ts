import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MAT_DIALOG_DATA } from '@angular/material';
import { Veterinarian } from 'src/app/model/veterinarian.model';
import { VeterinarianService } from 'src/app/services/veterinarian.service';

@Component({
  selector: 'app-delete-modal-vet',
  templateUrl: './delete-modal-vet.component.html',
  styleUrls: ['./delete-modal-vet.component.scss']
})
export class DeleteModalVetComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(public dialogRef: MatDialogRef<DeleteModalVetComponent>, @Inject(MAT_DIALOG_DATA) public vet: Veterinarian, private vetService: VeterinarianService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  delete(id: any) {
    this.vetService.delete(id).subscribe(() => {
      this.openSnackBarAfterVetDelete();
    })
  }
  openSnackBarAfterVetDelete(){
    this.snackBar.open('The veterinarian was successfully deleted!', 'Ok',{
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });

  }
}
