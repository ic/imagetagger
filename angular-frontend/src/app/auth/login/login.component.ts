import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    protected loginForm = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        remember: new FormControl(true)
    });

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
    }

    protected onSubmit() {
        const state = this.loginForm.value;
        this.authService.login(state.username, state.password, state.remember).subscribe(result => {
            this.loginForm.setErrors({invalidCredentials: true}, {emitEvent: true});
        });
    }

}
