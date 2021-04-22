import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  returnUrl: string;
  hidePassword: boolean = true;
  loading: boolean = false;
  error = '';
  
  
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService) {
      
// if (this.authenticationService.userValue) { 
// this.router.navigate(['/']);
// return;
// }

}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]]
      });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  public get f() {
    return this.loginForm.controls;
  }
  changeVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  login() {
    if (this.loginForm.invalid)
      return;

    this.loading = true;
    this.authenticationService.signIn(this.f.login.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
              this.loading = false;
              this.router.navigate([this.returnUrl]);
            },
            error => {
              this.loading = false;
              this.error = error;

            });
  }


}


