import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppState} from "../../store/app/app.state";
import {SELECT_APP_STATE} from "../../store/app/app.selectors";
import {tap} from "rxjs/operators";
import {fadeInAnimation} from "../../shared/animations/fade-in-animation";
import {fadeOutAnimation} from "../../shared/animations/fade-out-animation";
import {ACTION_EDIT_RESOURCE, ACTION_USER_LOGOUT} from "../../store/app/app.actions";

@Component({
  selector: 'cas-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  animations: [fadeInAnimation, fadeOutAnimation]
})
export class ToolbarComponent implements OnInit {

  state!: AppState;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.pipe(
      select(SELECT_APP_STATE),
      tap((state: AppState) => this.state = state)
    ).subscribe();
  }

  logout(): void {
    this.store.dispatch(ACTION_USER_LOGOUT());
  }

  edit(): void {
    this.store.dispatch(ACTION_EDIT_RESOURCE({resource: this.state.resource}))
  }
}
