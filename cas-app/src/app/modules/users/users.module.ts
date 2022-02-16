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
import {IconsModule} from "../../core/icons/icons.module";
import {ListModule} from "../../shared/components/list/list.module";
import {UserTileComponent} from './users-list/user-tile/user-tile.component';
import {ControlsModule} from "../../shared/components/controls/controls.module";

@NgModule({
  declarations: [
    UsersComponent,
    UsersTableComponent,
    UsersListComponent,
    UserTileComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    TableModule,
    FlexModule,
    InputsModule,
    CommonComponentsModule,
    IconsModule,
    ListModule,
    ControlsModule
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule {
}
