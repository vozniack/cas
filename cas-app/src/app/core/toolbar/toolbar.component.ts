import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {tap} from 'rxjs/operators';
import {fadeInAnimation} from '../../shared/animations/fade-in-animation';
import {ACTION_USER_LOGOUT,} from '../../store/app/app.actions';
import {upperPageStates} from '../../store/app/app.const';
import {SELECT_APP_STATE} from '../../store/app/app.selectors';
import {AppState} from '../../store/app/app.state';

@Component({
  selector: 'cas-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  animations: [fadeInAnimation]
})
export class ToolbarComponent implements OnInit {

  upperNavigationStates = upperPageStates;
  state!: AppState;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.pipe(
      select(SELECT_APP_STATE),
      tap((state: AppState) => this.state = state),
    ).subscribe();
  }

  logout(): void {
    this.store.dispatch(ACTION_USER_LOGOUT());
  }
}
