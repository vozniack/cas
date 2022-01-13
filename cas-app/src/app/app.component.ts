import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {UserState} from "./shared/store/user/user.state";
import {tap} from "rxjs/operators";
import {SELECT_USER_STATE} from "./shared/store/user/user.selectors";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  logged!: boolean;

  constructor(private store: Store<UserState>, private router: Router) {
  }

  ngOnInit(): void {
    this.store.pipe(
      select(SELECT_USER_STATE),
      tap((state: UserState) => this.logged = !!state.token),
      tap(() => this.redirectToLogin())
    ).subscribe();
  }

  redirectToLogin(): void {
    if (!this.logged) {
      this.router.navigate(['/login']).then()
    }
  }
}
