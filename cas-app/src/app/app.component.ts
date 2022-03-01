import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";
import {UserState} from "./store/app/app.state";
import {SELECT_USER_STATE} from "./store/app/app.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  logged!: boolean;

  constructor(private store: Store, private router: Router) {
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
