import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {fadeInAnimation} from '../../shared/animations/fade-in-animation';
import {ACTION_SET_NAVIGATION} from '../../store/app/app.actions';
import {dashboardPageState} from '../../store/app/app.const';

@Component({
  selector: 'cas-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [fadeInAnimation]
})
export class DashboardComponent {

  constructor(private store: Store) {
    this.store.dispatch(ACTION_SET_NAVIGATION({page: dashboardPageState}));
  }
}
