import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {UsersRoutingModule} from "./users-routing.module";

const COMPONENTS = [
  UsersComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule {
}
