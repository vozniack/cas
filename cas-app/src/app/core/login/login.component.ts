import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {emailRegex} from "../../shared/const/regex.const";
import {AuthService} from "../auth/auth.service";
import {LoginRequest, LoginResponse} from "../auth/auth.interface";
import {tap} from "rxjs/operators";
import {fadeInAnimation} from "../../shared/animations/fade-in-animation";
import {ACTION_USER_LOGIN} from "../../store/app/app.actions";

@Component({
  selector: 'cas-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeInAnimation]
})
export class LoginComponent {

  form!: FormGroup;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private store: Store,
              private router: Router) {
    this.form = this.formBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.pattern(emailRegex)]),
      password: new FormControl(null, [Validators.required])
    })
  }

  login(): void {
    this.authService.login(this.form.getRawValue() as LoginRequest).pipe(
      tap((response: LoginResponse) => this.store.dispatch(ACTION_USER_LOGIN({user: {token: response.token}}))),
      tap(() => this.router.navigate(['']))
    ).subscribe()
  }

  getControl(controlName: string): FormControl {
    return this.form.get(controlName) as FormControl;
  }
}
