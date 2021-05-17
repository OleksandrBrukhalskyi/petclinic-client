import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Pet } from 'src/app/model/pet.model';
import { Visit } from 'src/app/model/visit.model';
import { PetService } from 'src/app/services/pet.service';
import { VisitService } from 'src/app/services/visit.service';
import { AddVisitModalComponent } from '../add-visit-modal/add-visit-modal.component';

@Component({
  selector: 'app-update-visit-modal',
  templateUrl: './update-visit-modal.component.html',
  styleUrls: ['./update-visit-modal.component.scss']
})
export class UpdateVisitModalComponent implements OnInit {
  visits: any;
  pets: any;
  public dataSource: any;
  visitForm: FormGroup;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(public dialogRef: MatDialogRef<UpdateVisitModalComponent>, @Inject(MAT_DIALOG_DATA) public visit: Visit,
    @Inject(MAT_DIALOG_DATA) public pet: Pet, public petService: PetService, public visitService: VisitService,
    private formBuilder: FormBuilder, private snackBar: MatSnackBar) {
    this.visitForm = this.formBuilder.group({
      goalOfVisit: ['', [Validators.required]],
      price: ['', [Validators.required]],
      pet: ['', [Validators.required]],
      visitDate: ['', [Validators.required]]

    });
  }

  ngOnInit() {
    this.getPets()
  }
  update() {
    this.visitService.update(this.visit, this.visit.id).subscribe(() => {
      // this.getVisits();
      // this.openSnackBarAfterVisitUpdate()
    })
  }

  getVisits() {
    this.visitService.getVisits().subscribe(data  => {
      //this.dataSource.data = data;
      this.visits = data;

    })
  }

  getPets() {
    this.petService.getPets().subscribe((data: {}) => {
      this.pets = data;
      this.dataSource.data = data;

    });

  }
  openSnackBarAfterVisitUpdate() {
    this.snackBar.open('The visit was successfully updated!', 'Ok', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
