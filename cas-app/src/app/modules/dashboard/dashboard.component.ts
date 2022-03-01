import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {dashboardPageState} from "../../store/app/app.const";
import {ACTION_SET_NAVIGATION} from "../../store/app/app.actions";

@Component({
  selector: 'cas-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private store: Store) {
    this.store.dispatch(ACTION_SET_NAVIGATION({page: dashboardPageState}))
  }
}
