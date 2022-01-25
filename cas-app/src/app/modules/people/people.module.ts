import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PeopleRoutingModule} from "./people-routing.module";
import {PeopleComponent} from './people.component';
import { OrganizationsListComponent } from './organizations-list/organizations-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import {FlexModule} from "@angular/flex-layout";
import {ControlsModule} from "../../shared/components/controls/controls.module";
import {IconsModule} from "../../core/icons/icons.module";

@NgModule({
  declarations: [
    PeopleComponent,
    OrganizationsListComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    FlexModule,
    ControlsModule,
    IconsModule
  ]
})
export class PeopleModule {
}
