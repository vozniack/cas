import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from "./user/user.component";
import {FlexModule} from "@angular/flex-layout";
import {IconsModule} from "../../../core/icons/icons.module";
import {RoleComponent} from './role/role.component';

const COMPONENTS = [
  UserComponent,
  RoleComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    FlexModule,
    IconsModule
  ]
})
export class CommonComponentsModule {
}
