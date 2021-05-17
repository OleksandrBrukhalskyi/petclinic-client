import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Owner } from 'src/app/model/owner.model';
import { Pet } from 'src/app/model/pet.model';
import { OwnerService } from 'src/app/services/owner.service';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-add-pet-modal',
  templateUrl: './add-pet-modal.component.html',
  styleUrls: ['./add-pet-modal.component.scss']
})
export class AddPetModalComponent implements OnInit {

  petForm: FormGroup;
  dataSource: any;
  pets: any;
  owners: any;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  constructor(public dialogRef: MatDialogRef<AddPetModalComponent>,
    @Inject(MAT_DIALOG_DATA) public pet: Pet, @Inject(MAT_DIALOG_DATA) public owner: Owner, public petService: PetService, public ownerService: OwnerService ,
    private formBuilder: FormBuilder, private snackBar: MatSnackBar) {
      this.petForm = this.formBuilder.group({
        name: ['', [Validators.required]],
        breed: ['',[Validators.required]],
        dateOfBirth: ['',[Validators.required]],
        owner: ['',[Validators.required]]
    });
    }

  ngOnInit() {
    this.getOwners();
    this.load();


  }
  load() {
  	this.petService.getPets().subscribe((data: {}) => {
  	  this.dataSource.data = data;
  	  this.pets = data;
  	});
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  public get f() {
    return this.petForm.controls;
  }
   create() {

   this.petService.add(this.petForm.value).subscribe(() => {
    //console.log(this.petForm.value)

    //  console.log(this.pet);
     this.petForm.reset();
     this.petForm.setErrors(null);
     this.openSnackBarAfterPetAdd();
     this.load();



   });

  }
  getOwners() {
    this.ownerService.getOwners().subscribe((data: {}) => {
      this.owners = data;
    });

  }
  openSnackBarAfterPetAdd(){
    this.snackBar.open('Тваринку успішно додано!', 'Ok',{
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });

  }

}
