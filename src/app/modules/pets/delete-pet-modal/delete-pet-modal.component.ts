import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MAT_DIALOG_DATA } from '@angular/material';
import { Pet } from 'src/app/model/pet.model';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-delete-pet-modal',
  templateUrl: './delete-pet-modal.component.html',
  styleUrls: ['./delete-pet-modal.component.scss']
})
export class DeletePetModalComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  
  constructor(public dialogRef: MatDialogRef<DeletePetModalComponent>, @Inject(MAT_DIALOG_DATA) public pet: Pet, public petService: PetService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  delete(id: any) {
    this.petService.delete(id).subscribe(() =>{
        this.openSnackBarAfterPetDelete();
    })
  }
  openSnackBarAfterPetDelete(){
    this.snackBar.open('The pet was successfully deleted!', 'Ok',{
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });

  }

}
