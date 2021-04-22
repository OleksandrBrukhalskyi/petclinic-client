import {Component, OnInit, ViewChild} from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

import {MatPaginator} from '@angular/material/paginator';

import { Owner } from 'src/app/model/owner.model';
import { OwnerService } from 'src/app/services/owner.service';
import { AuthService } from 'src/app/services/auth.service';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalComponent } from './modal/modal.component';
import { ModalUpdateComponent } from './modal-update/modal-update.component';






@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {
  displayedColumns = ['id', 'surname', 'firstname', 'patronymic', 'address', 'phone_number' , 'actions' ];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

	   owners: any;
	   ownerToUpdate: Owner;
	  owner: Owner;
	  private id: any;
    dataSource: any;

    ownerForm: FormGroup;
   
    // ownerCurrent: Owner = {
    //   id: '',
    //   surname: '',
    //   firstname: '',
    //   patronymic: '',
    //   homeAddress: '',
    //   phoneNumber: ''
    // }
  constructor(public ownerService: OwnerService, private authService: AuthService, private formBuilder: FormBuilder, public dialog: MatDialog) {
      this.ownerForm = this.formBuilder.group({
        surname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]],
        firstname: ['', [Validators.required,Validators.minLength(3), Validators.maxLength(32)]],
        patronymic: ['', [Validators.required, Validators.minLength(5) ,Validators.maxLength(32)]],
        homeAddress: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(32)]],
        phoneNumber: ['',[Validators.required, Validators.minLength(12)]]

      });

   }
   openDialog(){
     const dialogRef = this.dialog.open(ModalComponent,{
       width: '720px',
       data:{}
     });
     dialogRef.afterClosed().subscribe(result => {
       this.owner = result;
       this.load();

     })

   }
   openDialogUpdate(owner: Owner){
    const dialogRef = this.dialog.open(ModalUpdateComponent,{
      width: '720px',
      data: owner

      // data:{
      //   surname: this.ownerCurrent.surname,
      //   firstname: this.ownerCurrent.firstname,
      //   patronymic: this.ownerCurrent.patronymic,
      //   homeAddress: this.ownerCurrent.homeAddress,
      //   phoneNumber: this.ownerCurrent.phoneNumber
      // }
    });
    dialogRef.afterClosed().subscribe(result => {
      //this.owner = result;
      //this.load();

    })

  }
   public get f() {
    return this.ownerForm.controls;
  }


  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.load();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    // this.owner = new Owner(this.owner.surname,this.owner.firstname,
    //   this.owner.patronymic,this.owner.homeAddress,this.owner.phoneNumber);

  }
 


  load() {
  	this.ownerService.getOwners().subscribe((data: {}) => {
  	  this.dataSource.data = data;
  	  this.owners = data;
  	});
  }

  loadOwners() {
    this.ownerService.getOwners().subscribe(data => {
      this.owners = data;
    });
  }

  public create() {
    let owner = new Owner(this.f.surname.value, this.f.firstname.value,
      this.f.patronymic.value, this.f.homeAddress.value, this.f.phoneNumber.value);
    this.ownerService.add(owner).subscribe(() => {
      this.load();
      this.ownerForm.reset();
      this.ownerForm.setErrors(null);


    });
  }

  // update(owner: Owner) {
  //   this.ownerToUpdate = owner;
  // }
  update() {
    //let ownerUpdated = this.ownerService.getById(this.owner.id)
    this.ownerService.update(this.owner,this.owner.id).subscribe(data =>{
      console.log(data);
 
    })
   }
  save() {
    if (this.ownerToUpdate.id !== '' && this.ownerToUpdate.surname !== '' && this.ownerToUpdate.firstname !== ''
    && this.ownerToUpdate.patronymic !== '' && this.ownerToUpdate.homeAddress !== '' && this.ownerToUpdate.phoneNumber !== '') {
      this.ownerService.update(this.ownerToUpdate , this.ownerToUpdate.id).subscribe(() => {
        this.load();
        this.ownerToUpdate = null;
      });
    }
  }

  delete(id: any) {
    this.ownerService.delete(id).subscribe(() => {
      this.load();
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  resetForm(form: NgForm) {
    form.resetForm();
  }
  
  logout(){
    this.authService.logout();
  }

}