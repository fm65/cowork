import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { BuildingService} from '../services/building.service';
import { BuildingModel} from '../models/building.model';
import { AuthService } from '../services/auth.service';
import { SubscriptionService} from '../services/subscription.service';
import {Observable} from 'rxjs';
import {SubscriptionModel} from '../models/subscription.model';

@Component({
    selector: 'cow-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    returnUrl: string;

    registrationFailed: boolean;
    loginCtrl: FormControl;
    passwordCtrl: FormControl;
    passwordTestCtrl: FormControl;
    firstNameCtrl: FormControl;
    lastNameCtrl: FormControl;
    buildingCtrl: FormControl;
    subscriptionCtrl: FormControl;
    userForm: FormGroup;
    passwordForm: FormGroup;

    buildings: Observable<Array<BuildingModel>>;
    subscriptions: Observable<Array<SubscriptionModel>>;

    constructor(private fb: FormBuilder, private authService: AuthService, private buildingService: BuildingService,
                private subscriptionService: SubscriptionService, private router: Router, private route: ActivatedRoute) {
    }

    static passwordMatch(control: FormGroup) {
        const password = control.get('password').value;
        const passwordTest = control.get('passwordTest').value;
        return password !== passwordTest ? {matchingError: true} : null;
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        this.buildings = this.buildingService.getAll();
        this.subscriptions = this.subscriptionService.getAll();

        this.loginCtrl = this.fb.control('', Validators.required);
        this.firstNameCtrl = this.fb.control('', Validators.required);
        this.lastNameCtrl = this.fb.control('', Validators.required);
        this.buildingCtrl = this.fb.control('', Validators.required);
        this.subscriptionCtrl = this.fb.control('', Validators.required);
        this.passwordCtrl = this.fb.control('', [Validators.required, Validators.minLength(8)]);
        this.passwordTestCtrl = this.fb.control('', Validators.required);
        this.passwordForm = this.fb.group
        (
            {
                password: this.passwordCtrl,
                passwordTest: this.passwordTestCtrl
            },
            {
                validator: RegisterComponent.passwordMatch
            }
        );

        this.userForm = this.fb.group
        (
            {
                login: this.loginCtrl,
                passwordForm: this.passwordForm,
                firstName: this.firstNameCtrl,
                lastName: this.lastNameCtrl,
                buildingId: this.buildingCtrl,
                subscriptionId: this.subscriptionCtrl
            });
    }

    register() {
        this.authService.register(
            this.userForm.value.login,
            this.userForm.value.passwordForm.password,
            this.userForm.value.firstName,
            this.userForm.value.lastName,
            parseInt(this.userForm.value.buildingId, 10),
            parseInt(this.userForm.value.subscriptionId, 10)
        ).subscribe(
            () => this.router.navigateByUrl(this.returnUrl),
            () => this.registrationFailed = true
        );
    }

}
