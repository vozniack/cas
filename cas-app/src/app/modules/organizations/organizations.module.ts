import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrganizationsComponent} from './organizations.component';
import {OrganizationsRoutingModule} from "./organizations-routing.module";
import {FlexModule} from "@angular/flex-layout";
import {TableModule} from "../../shared/components/table/table.module";
import {OrganizationsService} from "./organizations.service";
import {OrganizationsTableComponent} from './organizations-table/organizations-table.component';
import {InputsModule} from "../../shared/components/inputs/inputs.module";
import {CommonComponentsModule} from "../../shared/components/common/common-components.module";
import {OrganizationsTreeComponent} from './organizations-tree/organizations-tree.component';
import {TreeModule} from "../../shared/components/tree/tree.module";
import {OrganizationsMapper} from "./organizations-mapper.service";
import {OrganizationTileComponent} from './organizations-tree/organization-tile/organization-tile.component';
import {ControlsModule} from "../../shared/components/controls/controls.module";
import {IconsModule} from "../../core/icons/icons.module";
import {OrganizationComponent} from './organization/organization.component';
import {OrganizationsResolver} from "./organizations.resolver";
import {OrganizationViewComponent} from './organization-view/organization-view.component';
import {OrganizationInfoComponent} from './organization-view/organization-info/organization-info.component';
import {OrganizationRolesComponent} from './organization-view/organization-roles/organization-roles.component';
import {OrganizationUsersComponent} from './organization-view/organization-users/organization-users.component';
import {
  OrganizationPrivilegesComponent
} from './organization-view/organization-privileges/organization-privileges.component';
import {PrivilegesMapper} from "../privileges/privileges-mapper.service";
import {ListModule} from "../../shared/components/list/list.module";
import {RolesMapper} from "../roles/roles-mapper.service";
import {UsersMapper} from "../users/users-mapper.service";

@NgModule({
  declarations: [
    OrganizationsComponent,
    OrganizationsTableComponent,
    OrganizationsTreeComponent,
    OrganizationTileComponent,
    OrganizationComponent,
    OrganizationViewComponent,
    OrganizationInfoComponent,
    OrganizationRolesComponent,
    OrganizationUsersComponent,
    OrganizationPrivilegesComponent,
  ],
  imports: [
    CommonModule,
    OrganizationsRoutingModule,
    FlexModule,
    TableModule,
    InputsModule,
    CommonComponentsModule,
    TreeModule,
    ControlsModule,
    IconsModule,
    ListModule
  ],
  providers: [
    OrganizationsService,
    OrganizationsMapper,
    OrganizationsResolver,
    PrivilegesMapper,
    RolesMapper,
    UsersMapper
  ]
})
export class OrganizationsModule {
}
