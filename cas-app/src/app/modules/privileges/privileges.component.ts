import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {NavigationState} from "../../shared/store/navigation/navigation.state";
import {SET_NAVIGATION_STATE} from "../../shared/store/navigation/navigation.action";
import {privilegesState} from "../../shared/store/navigation/navigation.const";

@Component({
  selector: 'cas-privileges',
  templateUrl: './privileges.component.html',
  styleUrls: ['./privileges.component.scss']
})
export class PrivilegesComponent {

  constructor(private store: Store<NavigationState>) {
    this.store.dispatch(SET_NAVIGATION_STATE({navigationState: privilegesState}))
  }
}
