import {Component, OnInit, ViewChild} from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

import {MatPaginator} from '@angular/material/paginator';

import { Owner } from 'src/app/model/owner.model';
import { OwnerService } from 'src/app/services/owner.service';
import { AuthService } from 'src/app/services/auth.service';







@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {
  displayedColumns = ['id', 'surname', 'firstname', 'patronymic', 'address', 'phone_number' , 'actions' ];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

	  private owners: any;
	   ownerToUpdate: Owner;
	  
	  private id: any;
    dataSource: any;

    ownerForm: FormGroup;

    
  constructor(private ownerService: OwnerService, private authService: AuthService, private formBuilder: FormBuilder) {
      this.ownerForm = this.formBuilder.group({
        surname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]],
        firstname: ['', [Validators.required,Validators.minLength(3), Validators.maxLength(32)]],
        patronymic: ['', [Validators.required, Validators.minLength(5) ,Validators.maxLength(32)]],
        homeAddress: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(32)]],
        phoneNumber: ['',[Validators.required, Validators.minLength(12)]]

      });

   }
   public get f() {
    return this.ownerForm.controls;
  }


  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.load();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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

  update(owner: Owner) {
    this.ownerToUpdate = owner;
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
