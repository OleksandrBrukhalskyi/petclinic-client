import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { User } from '../model/user.model';
import { Auth } from '../model/auth.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(private http: HttpClient, private router: Router) {
        let localUser = JSON.parse(localStorage.getItem('user'));
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
        

    }
    refreshTokenPayload = {
        refreshToken: this.getRefreshToken(),
        login: this.getLogin()
      }
    public get userValue(): User {
        return this.userSubject.value;
    }
    
    signUp(user: User){
        return this.http.post<any>(`http://localhost:8080/api/auth/register`, user)
            
            
    }
    signIn(login: string, password: string) {
        return this.http.post<any>(`http://localhost:8080/api/auth/sign-in`, {login, password})
        .pipe(map(user => {
            if (user && user.token) {
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
            }

            return user;
        }));
    }
    refreshToken(){
        return this.http.post<any>(`http://localhost:8080/api/auth/refresh/token`, this.refreshTokenPayload)
        .pipe(tap(response => {
            localStorage.removeItem('token');
            localStorage.removeItem('expiresAt');

            localStorage.setItem('token',JSON.stringify(this.getJwtToken));
            localStorage.setItem('expiresAt',JSON.stringify(this.getExpire))

        }));

    }
    // getUser(){
    //     return localStorage.getItem('surname');
    // }
    userInfo = {
        surname: this.getSurname(),
        firstname: this.getFirstname(),
        patronymic: this.getPatronymic()
    }
    getSurname(){
        return localStorage.getItem('surname');
    }
    getFirstname(){
        return localStorage.getItem('firstname');
    }
    getPatronymic(){
        return localStorage.getItem('patronymic');
    }
    getLogin(){
        return localStorage.getItem('login');
    }
    getRefreshToken(){
        return localStorage.getItem('refreshToken');
    }
    getJwtToken(){
        return localStorage.getItem('token');
    }
    getExpire(){
        return localStorage.getItem('expiresAt');
    }
    logout() {
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/signin']);
      }

}