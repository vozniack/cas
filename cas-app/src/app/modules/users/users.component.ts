import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {NavigationState} from "../../shared/store/navigation/navigation.state";
import {SET_NAVIGATION_STATE} from "../../shared/store/navigation/navigation.action";
import {usersState} from "../../shared/store/navigation/navigation.const";

@Component({
  selector: 'cas-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  constructor(private store: Store<NavigationState>) {
    this.store.dispatch(SET_NAVIGATION_STATE({navigationState: usersState}))
  }
}
