import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {UserState} from "../../shared/store/user/user.state";
import {ACTION_USER_LOGIN} from "../../shared/store/user/user.actions";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {emailRegex} from "../../shared/const/regex.const";

@Component({
  selector: 'cas-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private store: Store<UserState>,
              private router: Router) {
    this.form = this.formBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.pattern(emailRegex)]),
      password: new FormControl(null, [Validators.required])
    })
  }

  login(): void {
    this.store.dispatch(ACTION_USER_LOGIN({userState: {token: 'Bearer xyz'}}));
    this.router.navigate(['']).then();
  }

  getControl(controlName: string): FormControl {
    return this.form.get(controlName) as FormControl;
  }
}
