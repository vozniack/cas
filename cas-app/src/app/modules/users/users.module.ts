import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {UsersRoutingModule} from "./users-routing.module";
import {TableModule} from "../../shared/components/table/table.module";
import {FlexModule} from "@angular/flex-layout";
import {UsersService} from "./users.service";
import {UsersTableComponent} from './users-table/users-table.component';
import {InputsModule} from "../../shared/components/inputs/inputs.module";
import {CommonComponentsModule} from "../../shared/components/common/common-components.module";
import {UsersListComponent} from './users-list/users-list.component';

const COMPONENTS = [
  UsersComponent,
  UsersTableComponent,
  UsersListComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    UsersRoutingModule,
    TableModule,
    FlexModule,
    InputsModule,
    CommonComponentsModule
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule {
}
