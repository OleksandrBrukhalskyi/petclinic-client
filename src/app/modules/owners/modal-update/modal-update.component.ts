import { ThrowStmt } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from 'src/app/model/owner.model';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.scss']
})
export class ModalUpdateComponent implements OnInit {

  ownerForm: FormGroup;
  dataSource: any;
  owners: any;
  ownerCurrent: any;


  // ownerToUpdate: Owner;
  owner: Owner;

  //public owner: Owner;
  public id: number;
  // owner: Owner = {
  //   id: '',
  //   surname: '',
  //   firstname: '',
  //   patronymic: '',
  //   homeAddress: '',
  //   phoneNumber: ''
  // }
 


  constructor(public dialogRef: MatDialogRef<ModalUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Owner, public ownerService: OwnerService,private formBuilder: FormBuilder,private router: Router, private route: ActivatedRoute
   ) {

    this.ownerForm = this.formBuilder.group({
      surname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]],
      firstname: ['', [Validators.required,Validators.minLength(3), Validators.maxLength(32)]],
      patronymic: ['', [Validators.required, Validators.minLength(5) ,Validators.maxLength(32)]],
      homeAddress: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(32)]],
      phoneNumber: ['',[Validators.required, Validators.minLength(12)]]

    });
   
   

}

  ngOnInit() {
    // this.owner = new Owner(this.owner.surname,this.owner.firstname,
    //   this.owner.patronymic,this.owner.homeAddress,this.owner.phoneNumber);
    //this.returnById(this.route.snapshot.params.id);

  }
  loadOwners() {
    this.ownerService.getOwners().subscribe(data => {
      this.owners = data;
    });
  }

  load() {
  	this.ownerService.getOwners().subscribe((res: {}) => {
  	  this.dataSource = res;
  	  this.owners = res;
  	});
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // public get f() {
  //   return this.ownerForm.controls;
  // }
  returnById(id: number){
    this.ownerService.getById(id).subscribe(data =>{
      console.log(data);

    })


  }
  update() {
    // const data = {
    //     id: this.owner.id,
    //     surname: this.owner.surname,
    //     firstname: this.owner.firstname,
    //     patronymic: this.owner.patronymic,
    //     homeAddress: this.owner.homeAddress,
    //     phoneNumber: this.owner.phoneNumber
    // };
    this.ownerService.update(this.data,this.data.id).subscribe(res => {
      //this.ownerCurrent = res;
      console.log(res);
      //this.load();
    })
  }
  // update(owner: Owner) {
  //   this.ownerToUpdate = owner;
  // }
  // update() {
  //  //let ownerUpdated = this.ownerService.getById(this.owner.id)
  //  this.ownerService.update(this.owner,this.owner.id).subscribe(data =>{
  //    console.log(data);
  //    this.load();


  //  })
  // }
  // update() {
  //   this.dialogRef.close(this.ownerForm.value);
  // }
 


  // save() {
  //   if (this.ownerToUpdate.id !== '' && this.ownerToUpdate.surname !== '' && this.ownerToUpdate.firstname !== ''
  //   && this.ownerToUpdate.patronymic !== '' && this.ownerToUpdate.homeAddress !== '' && this.ownerToUpdate.phoneNumber !== '') {
  //     this.ownerService.update(this.ownerToUpdate , this.ownerToUpdate.id).subscribe(() => {
  //       this.load();
  //       this.ownerToUpdate = null;
  //     });
  //   }
  // }

}
