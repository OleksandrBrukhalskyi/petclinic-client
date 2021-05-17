import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MAT_DIALOG_DATA } from '@angular/material';
import { Pet } from 'src/app/model/pet.model';
import { Visit } from 'src/app/model/visit.model';
import { PetService } from 'src/app/services/pet.service';
import { VisitService } from 'src/app/services/visit.service';

@Component({
  selector: 'app-add-visit-modal',
  templateUrl: './add-visit-modal.component.html',
  styleUrls: ['./add-visit-modal.component.scss']
})
export class AddVisitModalComponent implements OnInit {

  visits: any;
  pets: any;
  public dataSource: any;
  visitForm: FormGroup;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(public dialogRef: MatDialogRef<AddVisitModalComponent>, @Inject(MAT_DIALOG_DATA) public visit: Visit,
    @Inject(MAT_DIALOG_DATA) public pet: Pet, public petService: PetService, public visitService: VisitService,
    private formBuilder: FormBuilder, private snackBar: MatSnackBar) {
    this.visitForm = this.formBuilder.group({
      goalOfVisit: ['', [Validators.required]],
      price: ['', [Validators.required]],
      pet: ['', [Validators.required]],
      visitDate: ['', [Validators.required]]

    });
  }

  create() {
    this.visitService.add(this.visitForm.value).subscribe(() => {
      this.visitForm.reset();
      this.visitForm.setErrors(null);
      this.getVisits();
      this.openSnackBarAfterVisitAdd();



    })
  }

  ngOnInit() {
    this.getPets();
    this.getVisits();


  }

  getVisits() {
    this.visitService.getVisits().subscribe((data: {}) => {
      this.dataSource.data = data;
      this.visits = data;

    })
  }

  getPets() {
    this.petService.getPets().subscribe((data: {}) => {
      this.pets = data;


    });

  }
  openSnackBarAfterVisitAdd() {
    this.snackBar.open('The visit was successfully added!', 'Ok', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
