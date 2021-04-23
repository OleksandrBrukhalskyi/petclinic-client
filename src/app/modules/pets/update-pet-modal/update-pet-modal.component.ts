import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Owner } from 'src/app/model/owner.model';
import { Pet } from 'src/app/model/pet.model';
import { OwnerService } from 'src/app/services/owner.service';
import { PetService } from 'src/app/services/pet.service';
import { AddPetModalComponent } from '../add-pet-modal/add-pet-modal.component';

@Component({
  selector: 'app-update-pet-modal',
  templateUrl: './update-pet-modal.component.html',
  styleUrls: ['./update-pet-modal.component.scss']
})
export class UpdatePetModalComponent implements OnInit {
  petForm: FormGroup;
  dataSource: any;
  pets: any;
  owners: any;

   constructor(public dialogRef: MatDialogRef<AddPetModalComponent>, 
    @Inject(MAT_DIALOG_DATA) public pet: Pet, @Inject(MAT_DIALOG_DATA) public owner: Owner, public petService: PetService, public ownerService: OwnerService ,
    private formBuilder: FormBuilder) { 
      this.petForm = this.formBuilder.group({
        name: ['', [Validators.required]],
        breed: ['',[Validators.required]],
        dateOfBirth: ['',[Validators.required]],
        owner: ['',[Validators.required]]
    });
    }

  ngOnInit() {
    this.getOwners();
  }
  update() {
    this.petService.update(this.pet,this.pet.id).subscribe(res => {
        console.log(res);
    });

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  getOwners() {
    this.ownerService.getOwners().subscribe((data: {}) => {
      this.owners = data;
    });

  }

}
