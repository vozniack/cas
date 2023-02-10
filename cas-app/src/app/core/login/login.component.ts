import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {tap} from 'rxjs/operators';
import {fadeInAnimation} from '../../shared/animations/fade-in-animation';
import {emailRegex} from '../../shared/const/regex.const';
import {ACTION_USER_LOGIN} from '../../store/app/app.actions';
import {LoginRequest, LoginResponse} from '../auth/auth.interface';
import {AuthService} from '../auth/auth.service';
import {ToasterService} from '../toaster/toaster.service';

@Component({
  selector: 'cas-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeInAnimation]
})
export class LoginComponent {

  form!: FormGroup;

  constructor(private authService: AuthService,
              private toasterService: ToasterService,
              private formBuilder: FormBuilder,
              private store: Store,
              private router: Router) {
    this.form = this.formBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.pattern(emailRegex)]),
      password: new FormControl(null, [Validators.required])
    });
  }

  login(): void {
    this.authService.login(this.form.getRawValue() as LoginRequest).pipe(
      tap((response: LoginResponse) => this.store.dispatch(ACTION_USER_LOGIN({user: {token: response.token}}))),
      tap(() => this.router.navigate([''])),
      tap(() => this.toasterService.notifyInfo('You have been logged in'))
    ).subscribe();
  }

  getControl(controlName: string): FormControl {
    return this.form.get(controlName) as FormControl;
  }
}
