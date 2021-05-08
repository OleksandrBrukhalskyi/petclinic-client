import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MAT_DIALOG_DATA } from '@angular/material';
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
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  
  constructor(private specialtyService: SpecialtyService,private formBuilder: FormBuilder,public dialogRef: MatDialogRef<AddSpecialtyModalComponent>,
              @Inject(MAT_DIALOG_DATA) public specialty: Specialty, private snackBar: MatSnackBar) { 
    this.specialtyForm = this.formBuilder.group({
      name: ['',[Validators.required]]
    });

  }

  create() {
    this.specialtyService.add(this.specialtyForm.value).subscribe(() => {
        this.openSnackBarAfterSpecialtyAdd();
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
  openSnackBarAfterSpecialtyAdd(){
    this.snackBar.open('The specialty was successfully added!', 'Ok',{
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });

  }

}
