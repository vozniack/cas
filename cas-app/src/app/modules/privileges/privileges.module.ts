import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrivilegesComponent} from './privileges.component';
import {PrivilegesRoutingModule} from "./privileges-routing.module";
import {TableModule} from "../../shared/components/table/table.module";
import {PrivilegesService} from "./privileges.service";
import {FlexModule} from "@angular/flex-layout";
import {PrivilegesTableComponent} from './privileges-table/privileges-table.component';
import {InputsModule} from "../../shared/components/inputs/inputs.module";
import {CommonComponentsModule} from "../../shared/components/common/common-components.module";
import {PrivilegesTreeComponent} from './privileges-tree/privileges-tree.component';
import {TreeModule} from "../../shared/components/tree/tree.module";
import {PrivilegeMapperService} from "./privilege.mapper.service";

@NgModule({
  declarations: [
    PrivilegesComponent,
    PrivilegesTableComponent,
    PrivilegesTreeComponent
  ],
  imports: [
    CommonModule,
    PrivilegesRoutingModule,
    TableModule,
    FlexModule,
    InputsModule,
    CommonComponentsModule,
    TreeModule
  ],
  providers: [
    PrivilegesService,
    PrivilegeMapperService
  ]
})
export class PrivilegesModule {
}
