import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {NavigationState} from "../../shared/store/navigation/navigation.state";
import {SET_NAVIGATION_STATE} from "../../shared/store/navigation/navigation.action";
import {organizationsState} from "../../shared/store/navigation/navigation.const";

@Component({
  selector: 'cas-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent {

  constructor(private store: Store<NavigationState>) {
    this.store.dispatch(SET_NAVIGATION_STATE({navigationState: organizationsState}))
  }
}
