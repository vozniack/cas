import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrivilegesComponent} from './privileges.component';
import {PrivilegesRoutingModule} from "./privileges-routing.module";
import {TableModule} from "../../shared/components/table/table.module";
import {PrivilegesService} from "./privileges.service";
import {FlexModule} from "@angular/flex-layout";

const COMPONENTS = [
  PrivilegesComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    PrivilegesRoutingModule,
    TableModule,
    FlexModule
  ],
  providers: [
    PrivilegesService
  ]
})
export class PrivilegesModule {
}
