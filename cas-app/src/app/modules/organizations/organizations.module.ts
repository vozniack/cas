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

@NgModule({
  declarations: [
    OrganizationsComponent,
    OrganizationsTableComponent,
    OrganizationsTreeComponent,
    OrganizationTileComponent,
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
    IconsModule
  ],
  providers: [
    OrganizationsService,
    OrganizationsMapper
  ]
})
export class OrganizationsModule {
}
