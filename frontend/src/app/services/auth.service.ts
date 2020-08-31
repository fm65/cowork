import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3000/api/auth/';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    login(credentials): Observable<any> {
        return this.http.post(AUTH_API + 'signin', {
            email: credentials.email,
            password: credentials.password
        }, httpOptions);
    }

    register(email, password, firstname, lastname, buildingId, subscriptionId): Observable<any> {
        return this.http.post(AUTH_API + 'signup', {
            email: email,
            password: password,
            firstName: firstname,
            lastName: lastname,
            buildingId: buildingId,
            subscriptionId: subscriptionId
        }, httpOptions);
    }
    /*
    storeAuthenticationToken(resp: HttpResponse<Object>, rememberMe) {
        const jwt = resp.headers.get('Authorization');
        if (jwt) {
            this.jwtInterceptorService.setJwtToken(jwt);
            if (rememberMe) {
                window.localStorage.setItem('jwt', jwt);
            } else {
                window.sessionStorage.setItem('jwt', jwt);
            }
        }
        this.$isUserLoggedIn.next(true);
    }

    logout() {
        this.$isUserLoggedIn.next(false);
        window.sessionStorage.removeItem('jwt');
        window.localStorage.removeItem('jwt');
    }

     */
}
