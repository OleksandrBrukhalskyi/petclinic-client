import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Pet } from 'src/app/model/pet.model';
import { OwnerService } from 'src/app/services/owner.service';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  displayedColumns = ['id', 'name', 'breed', 'dateOfBirth', 'owner', 'actions'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  private owners: any;
  private pets: any;
  public dataSource: any;
  private pet: Pet;


  petForm: FormGroup;



  constructor(private ownerService: OwnerService, private petService: PetService, private formBuilder: FormBuilder) {
      this.petForm = this.formBuilder.group([{
          name: ['', [Validators.required]],
          breed: ['',[Validators.required]],
          dateOfBirth: ['',[Validators.required]],
          owner: ['',[Validators.required]]
      }]);


  }
  public get f() {
    return this.petForm.controls;
  }
  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.getPets();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.getOwners();


  }
  load() {
  	this.petService.getPets().subscribe((data: {}) => {
  	  this.dataSource.data = data;
  	  this.pets = data;
  	});
  }
  create() {
    this.petService.add(this.pet).subscribe(data => {
      this.load();
      this.petForm.setErrors(null);
      this.petForm.reset();

    });

  }
  update() {

  }
  getPets() {
    this.petService.getPets().subscribe((data: {}) => {
      this.dataSource.data = data;
      this.pets = data;
    });

  }
  
  getOwners() {
    this.petService.getPets().subscribe(data => {
      this.owners = data;
    });

  }
  delete(id: any) {
    this.petService.delete(id).subscribe(() => {
      this.getPets();
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
