import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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

  create() {
    this.vetService.add(this.vetForm.value).subscribe(() => {

    });

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
