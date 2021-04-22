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

  owner: Owner;
  public id: number;
  
 


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

  
  returnById(id: number){
    this.ownerService.getById(id).subscribe(data =>{
      console.log(data);

    })


  }
  update() {
   
    this.ownerService.update(this.data,this.data.id).subscribe(res => {
      console.log(res);
     
    })
  } 

}
