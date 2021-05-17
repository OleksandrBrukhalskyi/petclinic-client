import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Pet } from 'src/app/model/pet.model';
import { Visit } from 'src/app/model/visit.model';
import { PetService } from 'src/app/services/pet.service';
import { VisitService } from 'src/app/services/visit.service';
import { UpdatePetModalComponent } from '../pets/update-pet-modal/update-pet-modal.component';
import { AddVisitModalComponent } from './add-visit-modal/add-visit-modal.component';
import { DeleteVisitModalComponent } from './delete-visit-modal/delete-visit-modal.component';
import { UpdateVisitModalComponent } from './update-visit-modal/update-visit-modal.component';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.scss']
})
export class VisitsComponent implements OnInit {
  displayedColumns = ['id', 'goalOfVisit', 'price', 'pet', 'visitDate', 'actions']
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  visits: any;
  pets: any;
  public dataSource: any;
  visit: Visit;
  pet: Pet;

  visitForm: FormGroup;

  constructor(private visitService: VisitService, public petService: PetService, private formBuilder: FormBuilder, public dialog: MatDialog) {
    this.visitForm = this.formBuilder.group({
      goalOfVisit: ['', [Validators.required]],
      price: ['', [Validators.required]],
      pet: ['', [Validators.required]],
      visitDate: ['', [Validators.required]]

    });

  }
  public get f() {
    return this.visitForm.controls;
  }
  openDialogOnCreate() {
    const dialogRef = this.dialog.open(AddVisitModalComponent, {
      width: '800px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(data => {
      this.pet = data;
      this.getVisits();

    })

  }
  openDialogOnUpdate(visit: Visit) {
    const dialogRef = this.dialog.open(UpdateVisitModalComponent, {
      width: '800px',
      data: visit
    });
    dialogRef.afterClosed().subscribe(data => {
      this.getVisits();
    })

  }
  openDialogOnDelete(visit: Visit) {
    const dialogRef = this.dialog.open(DeleteVisitModalComponent, {
      width: '800px',
      data: visit
    });
    dialogRef.afterClosed().subscribe(data => {
      this.getVisits();
    })

  }
  ngOnInit() {

    this.dataSource = new MatTableDataSource();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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
      //this.dataSource = data;
      this.pets = data;

    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}
