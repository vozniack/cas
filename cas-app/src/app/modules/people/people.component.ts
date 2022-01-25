import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {NavigationState} from "../../shared/store/navigation/navigation.state";
import {ACTION_SET_NAVIGATION} from "../../shared/store/navigation/navigation.actions";
import {peopleState} from "../../shared/store/navigation/navigation.const";
import {Organization} from "../organizations/organizations.interface";
import {Subject} from "rxjs";

@Component({
  selector: 'cas-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {

  organizationRefresh = new Subject<Organization>();

  constructor(private store: Store<NavigationState>) {
    this.store.dispatch(ACTION_SET_NAVIGATION({navigationState: peopleState}));
  }
}
