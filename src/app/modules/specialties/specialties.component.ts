import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Specialty } from 'src/app/model/specialty.model';
import { SpecialtyService } from 'src/app/services/specialty.service';
import { AddSpecialtyModalComponent } from './add-specialty-modal/add-specialty-modal.component';
import { DeleteSpecialtyModalComponent } from './delete-specialty-modal/delete-specialty-modal.component';
import { UpdateSpecialtyModalComponent } from './update-specialty-modal/update-specialty-modal.component';

@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.scss']
})
export class SpecialtiesComponent implements OnInit {

  displayedColumns = ['id', 'name', 'actions'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  public dataSource: any;
  specialties: any;
  specialty: Specialty;
  specialtyForm: FormGroup;


  constructor(private specialtyService: SpecialtyService, private formBuilder: FormBuilder, public dialog: MatDialog) {
    this.specialtyForm = this.formBuilder.group({
      name: ['', [Validators.required]]
    });

  }

  public get f() {
    return this.specialtyForm.controls;
  }



  ngOnInit() {
    this.getSpecialties();
    this.dataSource = new MatTableDataSource();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  create() {
    this.specialtyService.add(this.specialty).subscribe(data => {
      this.specialtyForm.setErrors(null);
      this.specialtyForm.reset();

    });

  }

  update() {
    this.specialtyService.update(this.specialty, this.specialty.id).subscribe(data => {

    });

  }
  getSpecialties() {
    this.specialtyService.getSpecialties().subscribe((data: {}) => {
      this.dataSource.data = data;
      this.specialties = data;
    })
  }

  delete(id: any) {
    this.specialtyService.delete(id).subscribe(() => {
      this.getSpecialties();
    });

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialogOnCreate() {
    const dialogRef = this.dialog.open(AddSpecialtyModalComponent, {
      width: '800px',
      data: {}


    });
    dialogRef.afterClosed().subscribe(result => {
      this.specialty = result;
      console.log(result)
      this.getSpecialties();

    })


  }
  openDialogOnUpdate(specialty: Specialty) {
    const dialogRef = this.dialog.open(UpdateSpecialtyModalComponent, {
      width: '800px',
      data: specialty
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getSpecialties();

    })

  }
  openDialogOnDelete(specialty: Specialty) {
    const dialogRef = this.dialog.open(DeleteSpecialtyModalComponent, {
      width: '800px',
      data: specialty
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getSpecialties();

    })

  }




}
