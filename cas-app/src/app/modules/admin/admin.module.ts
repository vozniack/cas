import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {InternalPrivilegesComponent} from './internal-privileges/internal-privileges.component';
import {InternalRolesComponent} from './internal-roles/internal-roles.component';
import {InternalUsersComponent} from './internal-users/internal-users.component';
import {InternalInfoComponent} from './internal-info/internal-info.component';
import {FlexModule} from "@angular/flex-layout";
import {OrganizationsService} from "../organizations/organizations.service";
import {RolesService} from "../roles/roles.service";
import {UsersService} from "../users/users.service";
import {PrivilegesService} from "../privileges/privileges.service";
import {CommonComponentsModule} from "../../shared/components/common/common-components.module";
import {IconsModule} from "../../core/icons/icons.module";
import {TreeModule} from "../../shared/components/tree/tree.module";
import {PrivilegesMapper} from "../privileges/privileges-mapper.service";

@NgModule({
  declarations: [
    AdminComponent,
    InternalPrivilegesComponent,
    InternalRolesComponent,
    InternalUsersComponent,
    InternalInfoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FlexModule,
    CommonComponentsModule,
    IconsModule,
    TreeModule
  ],
  providers: [
    OrganizationsService,
    RolesService,
    UsersService,
    PrivilegesService,
    PrivilegesMapper
  ]
})
export class AdminModule {
}
