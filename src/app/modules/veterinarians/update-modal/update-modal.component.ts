import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Specialty } from 'src/app/model/specialty.model';
import { Veterinarian } from 'src/app/model/veterinarian.model';
import { SpecialtyService } from 'src/app/services/specialty.service';
import { VeterinarianService } from 'src/app/services/veterinarian.service';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.scss']
})
export class UpdateModalComponent implements OnInit {
  vetForm: FormGroup;
  dataSource: any;
  veterinarians: any;
  specialties: any;

  constructor(public dialogRef: MatDialogRef<UpdateModalComponent>,
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
  }

  update() {
    this.vetService.update(this.vet, this.vet.id).subscribe(() => {

    });

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  getSpecialties() {
    return this.specialtyService.getSpecialties().subscribe(data =>{
      this.specialties = data;
    })
  }

}
