import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from "./user/user.component";
import {FlexModule} from "@angular/flex-layout";
import {IconsModule} from "../../../core/icons/icons.module";
import {RoleComponent} from './role/role.component';
import {DataToolbarComponent} from './data-toolbar/data-toolbar.component';
import {InputsModule} from "../inputs/inputs.module";
import {OrganizationsService} from "../../../modules/organizations/organizations.service";

const COMPONENTS = [
  UserComponent,
  RoleComponent,
  DataToolbarComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    FlexModule,
    IconsModule,
    InputsModule
  ],
  providers: [
    OrganizationsService
  ]
})
export class CommonComponentsModule {
}
