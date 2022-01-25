import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PeopleRoutingModule} from "./people-routing.module";
import {PeopleComponent} from './people.component';
import {OrganizationsComponent} from './organizations/organizations.component';
import {UsersComponent} from './users/users.component';
import {FlexModule} from "@angular/flex-layout";
import {ControlsModule} from "../../shared/components/controls/controls.module";
import {IconsModule} from "../../core/icons/icons.module";
import {UsersService} from "../users/users.service";
import {OrganizationsService} from "../organizations/organizations.service";
import {OrganizationTileComponent} from './organizations/organization-tile/organization-tile.component';
import {InputsModule} from "../../shared/components/inputs/inputs.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    PeopleComponent,
    OrganizationsComponent,
    UsersComponent,
    OrganizationTileComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    FlexModule,
    ControlsModule,
    IconsModule,
    InputsModule,
    ReactiveFormsModule
  ],
  providers: [
    OrganizationsService,
    UsersService
  ]
})
export class PeopleModule {
}
