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

const COMPONENTS = [
  RolesComponent,
  RolesTableComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    RolesRoutingModule,
    TableModule,
    FlexModule,
    InputsModule,
    CommonComponentsModule
  ],
  providers: [
    RolesService
  ]
})
export class RolesModule {
}
