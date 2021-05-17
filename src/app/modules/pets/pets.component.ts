import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { Owner } from 'src/app/model/owner.model';
import { Pet } from 'src/app/model/pet.model';
import { OwnerService } from 'src/app/services/owner.service';
import { PetService } from 'src/app/services/pet.service';
import { AddPetModalComponent } from './add-pet-modal/add-pet-modal.component';
import { DeletePetModalComponent } from './delete-pet-modal/delete-pet-modal.component';
import { UpdatePetModalComponent } from './update-pet-modal/update-pet-modal.component';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  displayedColumns = ['id', 'name', 'breed', 'dateOfBirth', 'owner', 'actions'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
   owners: any;
   pets: any;
   public dataSource: any;
   pet: Pet;
   owner: Owner;
  
  petForm: FormGroup;



  constructor(private ownerService: OwnerService, private petService: PetService, private formBuilder: FormBuilder, 
    public dialog: MatDialog) {
      this.petForm = this.formBuilder.group({
          name: ['', [Validators.required]],
          breed: ['',[Validators.required]],
          dateOfBirth: ['',[Validators.required]],
          owner: ['',[Validators.required]]
      });


  }
  public get f() {
    return this.petForm.controls;
  }
  ngOnInit() {
    this.getPets();
    this.getOwners();
    this.dataSource = new MatTableDataSource();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    


  }
  load() {
  	this.petService.getPets().subscribe((data: {}) => {
  	  this.dataSource.data = data;
  	  this.pets = data;
  	});
  }
  create() {
    this.petService.add(this.pet).subscribe(data => {
      console.log(data);
      this.load();
      this.petForm.setErrors(null);
      this.petForm.reset();

    });

  }
  update() {
    this.petService.update(this.pet,this.pet.id).subscribe(res => {

    });

  }
  getPets() {
    this.petService.getPets().subscribe((data: {}) => {
      this.dataSource.data = data;
      this.pets = data;
    });

  }
  
  getOwners() {
    this.ownerService.getOwners().subscribe((data: {}) => {
      this.owners = data;
    });

  }
  
  // delete(id: any) {
  //   this.petService.delete(id).subscribe(() => {
  //     this.getPets();
  //   });
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialogOnCreate(){
    const dialogRef = this.dialog.open(AddPetModalComponent,{
      width: '800px',
      data: {}

    
    });
    dialogRef.afterClosed().subscribe(result => {
      this.pet = result;
      console.log(result)
      this.load();

    })


  }
  openDialogOnUpdate(pet: Pet) {
    const dialogRef = this.dialog.open(UpdatePetModalComponent, {
        width: '800px',
        data: pet
    });
    dialogRef.afterClosed().subscribe(result => {
      //console.log(result)
      this.load();
      

    })

  }

  openDialogOnDelete(pet: Pet) {
    const dialogRef = this.dialog.open(DeletePetModalComponent,{
      width: '500px',
      data: pet
    });
    dialogRef.afterClosed().subscribe(() => {
      this.load();
    })

  }


}
