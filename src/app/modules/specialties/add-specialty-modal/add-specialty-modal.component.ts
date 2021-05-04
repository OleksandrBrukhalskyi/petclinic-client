import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Specialty } from 'src/app/model/specialty.model';
import { SpecialtyService } from 'src/app/services/specialty.service';

@Component({
  selector: 'app-add-specialty-modal',
  templateUrl: './add-specialty-modal.component.html',
  styleUrls: ['./add-specialty-modal.component.scss']
})
export class AddSpecialtyModalComponent implements OnInit {
  public dataSource: any;
  specialties: any;
  specialtyForm: FormGroup;
  
  constructor(private specialtyService: SpecialtyService,private formBuilder: FormBuilder,public dialogRef: MatDialogRef<AddSpecialtyModalComponent>,
              @Inject(MAT_DIALOG_DATA) public specialty: Specialty) { 
    this.specialtyForm = this.formBuilder.group({
      name: ['',[Validators.required]]
    });

  }

  create() {
    this.specialtyService.add(this.specialtyForm.value).subscribe(() => {
        console.log(this.specialtyForm.value)
    });

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  public get f() {
    return this.specialtyForm.controls;
  }

  ngOnInit() {
    this.getSpecialties();
  }
  getSpecialties() {
    this.specialtyService.getSpecialties().subscribe(data => {
      this.dataSource.data = data;
      this.specialties = data;
    })
  }

}
