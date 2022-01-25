import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrganizationsComponent} from './organizations.component';
import {OrganizationsRoutingModule} from "./organizations-routing.module";
import {FlexModule} from "@angular/flex-layout";
import {TableModule} from "../../shared/components/table/table.module";
import {OrganizationsService} from "./organizations.service";

const COMPONENTS = [
  OrganizationsComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    OrganizationsRoutingModule,
    FlexModule,
    TableModule
  ],
  providers: [
    OrganizationsService
  ]
})
export class OrganizationsModule {
}
