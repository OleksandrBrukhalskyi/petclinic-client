import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Specialty } from 'src/app/model/specialty.model';
import { SpecialtyService } from 'src/app/services/specialty.service';
import { AddSpecialtyModalComponent } from '../add-specialty-modal/add-specialty-modal.component';

@Component({
  selector: 'app-update-specialty-modal',
  templateUrl: './update-specialty-modal.component.html',
  styleUrls: ['./update-specialty-modal.component.scss']
})
export class UpdateSpecialtyModalComponent implements OnInit {
  dataSource: any;
  specialties: any;
  specialtyForm: FormGroup;
  
  constructor(private specialtyService: SpecialtyService,private formBuilder: FormBuilder,public dialogRef: MatDialogRef<UpdateSpecialtyModalComponent>,
              @Inject(MAT_DIALOG_DATA) public specialty: Specialty) { 
    this.specialtyForm = this.formBuilder.group({
      name: ['',[Validators.required]]
    });

  }

  update() {
    this.specialtyService.update(this.specialty,this.specialty.id).subscribe(() => {

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
      //this.dataSource.data = data;
      this.specialties = data;
    })
  }

}
