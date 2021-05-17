import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MAT_DIALOG_DATA } from '@angular/material';
import { Specialty } from 'src/app/model/specialty.model';
import { Veterinarian } from 'src/app/model/veterinarian.model';
import { SpecialtyService } from 'src/app/services/specialty.service';
import { VeterinarianService } from 'src/app/services/veterinarian.service';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent implements OnInit {

  vetForm: FormGroup;
  dataSource: any;
  veterinarians: any;
  specialties: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(public dialogRef: MatDialogRef<AddModalComponent>,
              @Inject(MAT_DIALOG_DATA) public vet: Veterinarian, @Inject(MAT_DIALOG_DATA) public specialty: Specialty,
              public vetService: VeterinarianService, public specialtyService: SpecialtyService, private formBuilder: FormBuilder ) {
          
                this.vetForm = this.formBuilder.group({
                  surname: ['', [Validators.required]],
                  firstname: ['', [Validators.required]],
                  patronymic: [''],
                  specialty: ['',[Validators.required]]
      
              });
      }

  ngOnInit() {
    this.getSpecialties();
    this.load();

  }

  load() {
    this.vetService.getVeterinarians().subscribe((data: {}) => {
      this.dataSource.data = data;
      this.veterinarians = data;

    })
  }

  public get f() {
    return this.vetForm.controls;
  }
  
  getSpecialties() {
    return this.specialtyService.getSpecialties().subscribe(data =>{
      this.specialties = data;
    })
  }
  getVets() {
    return this.vetService.getVeterinarians().subscribe(data => {
      this.veterinarians = data;
    });

  }

  create() {
    this.vetService.add(this.vetForm.value).subscribe(() => {
        console.log(this.vetForm.value)
        this.getVets();
    });

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
