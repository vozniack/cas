import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RolesComponent} from './roles.component';
import {RolesRoutingModule} from "./roles-routing.module";
import {RolesService} from "./roles.service";
import {TableModule} from "../../shared/components/table/table.module";
import {FlexModule} from "@angular/flex-layout";
import {RolesTableComponent} from './roles-table/roles-table.component';
import {InputsModule} from "../../shared/components/inputs/inputs.module";

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
    InputsModule
  ],
  providers: [
    RolesService
  ]
})
export class RolesModule {
}
