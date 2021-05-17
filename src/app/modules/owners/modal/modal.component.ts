import { Component, Inject, OnInit } from '@angular/core';
import { Owner } from 'src/app/model/owner.model';
import { MatDialogRef, MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MAT_DIALOG_DATA} from '@angular/material';
import { OwnerService } from 'src/app/services/owner.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent  implements OnInit {
  ownerForm: FormGroup;
  dataSource: any;
  owners: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';



  constructor(public dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) public owner: Owner, public ownerService: OwnerService,private formBuilder: FormBuilder,private _snackBar: MatSnackBar
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
  load() {
  	this.ownerService.getOwners().subscribe((data: {}) => {
  	  this.dataSource.data = data;
  	  this.owners = data;
  	});
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public get f() {
    return this.ownerForm.controls;
  }

  public create() {
    let owner = new Owner(this.f.surname.value, this.f.firstname.value,
      this.f.patronymic.value, this.f.homeAddress.value, this.f.phoneNumber.value);
    this.ownerService.add(owner).subscribe(() => {
      this.load();
      this.ownerForm.reset();
      this.ownerForm.setErrors(null);
      this.openSnackBarAfterOwnerAdd();



    });
  }
  openSnackBarAfterOwnerAdd(){
    this._snackBar.open('Власника успішно додано!', 'Ok',{
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });

  }

}
