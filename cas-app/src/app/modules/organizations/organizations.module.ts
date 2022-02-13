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
import {OrganizationsGridComponent} from './organizations-grid/organizations-grid.component';
import {OrganizationsTreeComponent} from './organizations-tree/organizations-tree.component';
import {TreeModule} from "../../shared/components/tree/tree.module";
import {OrganizationMapperService} from "./organization.mapper.service";

@NgModule({
  declarations: [
    OrganizationsComponent,
    OrganizationsTableComponent,
    OrganizationsGridComponent,
    OrganizationsTreeComponent
  ],
  imports: [
    CommonModule,
    OrganizationsRoutingModule,
    FlexModule,
    TableModule,
    InputsModule,
    CommonComponentsModule,
    TreeModule
  ],
  providers: [
    OrganizationsService,
    OrganizationMapperService
  ]
})
export class OrganizationsModule {
}
