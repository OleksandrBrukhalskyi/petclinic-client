import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, filter, switchMap, take } from "rxjs/operators";
import { LoginResponse } from "../modules/login/login-response.payload";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
    isTokenRefreshing = false;
    refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject(null);
    
    constructor(public authService: AuthService){}

    intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    if (req.url.indexOf('refresh') !== -1 || req.url.indexOf('signin') !== -1) {
        return next.handle(req);
    }
    const jwtToken = this.authService.getJwtToken();
    console.log(jwtToken);
    if (jwtToken) {
        return next.handle(this.addToken(req, jwtToken)).pipe(catchError(error => {
            if (error instanceof HttpErrorResponse
                && error.status === 403) {
                return this.handleAuthErrors(req, next);
            } else {
                return throwError(error);
            }
        }));
    }
    return next.handle(req);

}
    private handleAuthErrors(req: HttpRequest<any>, next: HttpHandler)
    : Observable<HttpEvent<any>> {
    if (!this.isTokenRefreshing) {
        this.isTokenRefreshing = true;
        this.refreshTokenSubject.next(null);

        return this.authService.refreshToken().pipe(
            switchMap((refreshTokenResponse: LoginResponse) => {
                this.isTokenRefreshing = false;
                this.refreshTokenSubject
                    .next(refreshTokenResponse.token);
                return next.handle(this.addToken(req,
                    refreshTokenResponse.token));
            })
        )
    } else {
        return this.refreshTokenSubject.pipe(
            filter(result => result !== null),
            take(1),
            switchMap((res) => {
                return next.handle(this.addToken(req,
                    this.authService.getJwtToken()))
            })
        );
    }
}

    addToken(req: HttpRequest<any>, jwtToken: any) {
        return req.clone({
            
            headers: req.headers.set('Authorization',
                'Bearer ' + jwtToken)
        });
        

    }
    
    

    
}