import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {NavigationState} from "../../shared/store/navigation/navigation.state";
import {SET_NAVIGATION_STATE} from "../../shared/store/navigation/navigation.action";
import {rolesState} from "../../shared/store/navigation/navigation.const";

@Component({
  selector: 'cas-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {

  constructor(private store: Store<NavigationState>) {
    this.store.dispatch(SET_NAVIGATION_STATE({navigationState: rolesState}))
  }
}
