import { Component, OnInit } from '@angular/core';
import { UserService } from "../old/user.service";
import { ActivatedRoute, Router } from "@angular/router";
import {AuthService} from '../services/auth.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'cow-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    returnUrl: string;

    loginCtrl: FormControl;
    passwordCtrl: FormControl;

    credentials = {
        login: '',
        password: ''
    };
    authenticationFailed = false;


    constructor(private fb: FormBuilder, private authService: AuthService,
                private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        console.log(this.returnUrl);

        this.loginCtrl = this.fb.control('', Validators.required);
        this.passwordCtrl = this.fb.control('', Validators.required);

        this.credentials.login = this.loginCtrl.value;
        this.credentials.password = this.passwordCtrl.value;

    }

    authenticate() {
        this.authService.login(this.credentials).subscribe(
            success => this.router.navigateByUrl(this.returnUrl),
            error => this.authenticationFailed = true
        );
    }

}
