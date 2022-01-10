import {Component} from '@angular/core';
import {NavigationState} from "../../shared/store/navigation/navigation.state";
import {Store} from "@ngrx/store";
import {dashboardState} from "../../shared/store/navigation/navigation.const";
import {SET_NAVIGATION_STATE} from "../../shared/store/navigation/navigation.action";

@Component({
  selector: 'cas-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private store: Store<NavigationState>) {
    this.store.dispatch(SET_NAVIGATION_STATE({navigationState: dashboardState}))
  }
}
