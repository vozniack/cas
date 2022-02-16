import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RolesComponent} from './roles.component';
import {RolesRoutingModule} from "./roles-routing.module";
import {RolesService} from "./roles.service";
import {TableModule} from "../../shared/components/table/table.module";
import {FlexModule} from "@angular/flex-layout";
import {RolesTableComponent} from './roles-table/roles-table.component';
import {InputsModule} from "../../shared/components/inputs/inputs.module";
import {CommonComponentsModule} from "../../shared/components/common/common-components.module";
import {RolesListComponent} from './roles-list/roles-list.component';
import {RoleTileComponent} from './roles-list/role-tile/role-tile.component';
import {ControlsModule} from "../../shared/components/controls/controls.module";
import {IconsModule} from "../../core/icons/icons.module";
import {ListModule} from "../../shared/components/list/list.module";

@NgModule({
  declarations: [
    RolesComponent,
    RolesTableComponent,
    RolesListComponent,
    RoleTileComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    TableModule,
    FlexModule,
    InputsModule,
    CommonComponentsModule,
    ControlsModule,
    IconsModule,
    ListModule
  ],
  providers: [
    RolesService
  ]
})
export class RolesModule {
}
