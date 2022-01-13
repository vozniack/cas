import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {NavigationState} from "../../shared/store/navigation/navigation.state";
import {SELECT_NAVIGATION_STATE} from "../../shared/store/navigation/navigation.selectors";
import {tap} from "rxjs/operators";
import {UserState} from "../../shared/store/user/user.state";
import {ACTION_USER_LOGOUT} from "../../shared/store/user/user.actions";

@Component({
  selector: 'cas-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  title!: string;
  subtitle!: string;

  constructor(private navigationStore: Store<NavigationState>, private userStore: Store<UserState>) {
  }

  ngOnInit(): void {
    this.navigationStore.pipe(
      select(SELECT_NAVIGATION_STATE),
      tap((state: any) => {
        this.title = state.title;
        this.subtitle = state.subtitle;
      })
    ).subscribe();
  }

  logout(): void {
    this.userStore.dispatch(ACTION_USER_LOGOUT());
  }
}
