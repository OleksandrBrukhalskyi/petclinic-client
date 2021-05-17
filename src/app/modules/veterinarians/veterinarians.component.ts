import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Specialty } from 'src/app/model/specialty.model';
import { Veterinarian } from 'src/app/model/veterinarian.model';
import { SpecialtyService } from 'src/app/services/specialty.service';
import { VeterinarianService } from 'src/app/services/veterinarian.service';
import { AddModalComponent } from './add-modal/add-modal.component';
import { DeleteModalVetComponent } from './delete-modal-vet/delete-modal-vet.component';
import { UpdateModalComponent } from './update-modal/update-modal.component';

@Component({
  selector: 'app-veterinarians',
  templateUrl: './veterinarians.component.html',
  styleUrls: ['./veterinarians.component.scss']
})
export class VeterinariansComponent implements OnInit {

  displayedColumns = ['id', 'surname', 'firstname', 'patronymic', 'specialty', 'actions'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  veterinarians: any;
  specialties: any;
  public dataSource: any;
  veterinarian: Veterinarian;
  specialty: Specialty;
  vetForm: FormGroup;


  constructor(private specialtyService: SpecialtyService, private veterinarianService: VeterinarianService,
    private formBuilder: FormBuilder, public dialog: MatDialog) {

    this.vetForm = this.formBuilder.group({
      surname: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      patronymic: [''],
      specialty: ['', [Validators.required]]

    });

  }
  public get f() {
    return this.vetForm.controls;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.getVeterinarians();
    this.getSpecialties();

  }

  create() {
    this.veterinarianService.add(this.veterinarian).subscribe(data => {
      this.getVeterinarians();
      this.vetForm.setErrors(null);
      this.vetForm.reset();


    });

  }

  getSpecialties() {
    this.specialtyService.getSpecialties().subscribe((data: {}) => {
      this.specialties = data;
      //this.dataSource.data = data;
    });

  }
  getVeterinarians() {
    this.veterinarianService.getVeterinarians().subscribe((data: {}) => {
      this.dataSource.data = data;
      this.veterinarians = data;
    });

  }

  update() {
    this.veterinarianService.update(this.veterinarian, this.veterinarian.id).subscribe(() => {
      
    });

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(id: number) {
    this.veterinarianService.delete(id).subscribe(() => {
      this.getVeterinarians();
    });

  }
  openDialogOnCreate() {
    const dialogRef = this.dialog.open(AddModalComponent, {
      width: '800px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(data => {
      this.veterinarian = data;
      this.getVeterinarians();
    })
  }

  openDiaglogOnUpdate(veterinarian: Veterinarian) {
    const dialogRef = this.dialog.open(UpdateModalComponent, {
      width: '800px',
      data: veterinarian
    });
    dialogRef.afterClosed().subscribe(data => {
      //console.log(data);
      this.load();

    })
  }

  openDiaglogOnDelete(veterinarian: Veterinarian) {
    const dialogRef = this.dialog.open(DeleteModalVetComponent, {
      width: '800px',
      data: veterinarian
    });
    dialogRef.afterClosed().subscribe(data => {
      //console.log(data);
    })
  }
  load() {
    this.veterinarianService.getVeterinarians().subscribe((data: {}) => {
      this.dataSource.data = data;
      this.veterinarians = data;

    })
  }

}
