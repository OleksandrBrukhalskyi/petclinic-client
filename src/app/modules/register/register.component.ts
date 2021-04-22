import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  hidePassword: boolean = true;
  hideConfirm: boolean = true;
  loading: boolean = false;
  returnUrl: string;

  registerForm: FormGroup;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private _snackBar: MatSnackBar) {

    

    this.registerForm  = this.formBuilder.group({
      surname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]],
      firstname: ['', [Validators.required,Validators.minLength(3), Validators.maxLength(32)]],
      patronymic: ['', [Validators.required, Validators.minLength(5) ,Validators.maxLength(32)]],
      email: ['', [Validators.email]],
      login: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
      confirm: [''],
     
      
    }, { validator: this.checkPassword });
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  public get f() {
    return this.registerForm.controls;
  }
  checkPassword(group: FormGroup): ValidationErrors | null {
    return group.controls.password.value === group.controls.confirm.value ? null : { notSame: true };
  }
  onPasswordInput() {
    if (this.registerForm.hasError('notSame'))
      this.f.confirm.setErrors([{'notSame': true}]);
    else
      this.f.confirm.setErrors(null);
  }
  
    

  signUp() {
    if (this.registerForm.invalid)
    return;
    
    let user = new User(this.f.surname.value, this.f.firstname.value,
                        this.f.patronymic.value, this.f.email.value,
                        this.f.login.value,
                        this.f.password.value);
    this.loading = true;
    this.authService.signUp(user)
      .pipe(first())
        .subscribe(
          data => {
            this.loading = false;
            this.openSnackBarAfterRegistration(); 
            this.router.navigate(['/signin', { queryParams: {returnUrl: this.returnUrl}}]);

          },
          error => {
            this.loading = false;
            console.log(error);

          }
          
        
        );

  }
  openSnackBarAfterRegistration(){
    this._snackBar.open('You have registered successfully! Check your email for confirmation letter.', 'Ok',{
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });

  }

}
