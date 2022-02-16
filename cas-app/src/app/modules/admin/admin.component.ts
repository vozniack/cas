import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {NavigationState} from "../../shared/store/navigation/navigation.state";
import {ACTION_SET_NAVIGATION} from "../../shared/store/navigation/navigation.actions";
import {adminState} from "../../shared/store/navigation/navigation.const";
import {Organization} from "../organizations/organizations.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'cas-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  organization!: Organization;

  constructor(private store: Store<NavigationState>,
              private activatedRoute: ActivatedRoute) {
    this.store.dispatch(ACTION_SET_NAVIGATION({navigationState: adminState}))
    this.organization = this.activatedRoute.snapshot.data['organization'];
  }
}
