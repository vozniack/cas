import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {UsersRoutingModule} from "./users-routing.module";
import {TableModule} from "../../shared/components/table/table.module";
import {FlexModule} from "@angular/flex-layout";
import {UsersService} from "./users.service";
import {UsersTableComponent} from './users-table/users-table.component';
import {InputsModule} from "../../shared/components/inputs/inputs.module";

const COMPONENTS = [
  UsersComponent,
  UsersTableComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    UsersRoutingModule,
    TableModule,
    FlexModule,
    InputsModule
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule {
}