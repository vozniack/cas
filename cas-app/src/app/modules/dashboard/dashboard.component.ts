import {Component} from '@angular/core';
import {NavigationState} from "../../shared/store/navigation/navigation.state";
import {Store} from "@ngrx/store";
import {dashboardState} from "../../shared/store/navigation/navigation.const";
import {ACTION_SET_NAVIGATION} from "../../shared/store/navigation/navigation.actions";

@Component({
  selector: 'cas-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private store: Store<NavigationState>) {
    this.store.dispatch(ACTION_SET_NAVIGATION({navigationState: dashboardState}))
  }
}
