import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RolesComponent} from './roles.component';
import {RolesRoutingModule} from "./roles-routing.module";

const COMPONENTS = [
  RolesComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    RolesRoutingModule
  ]
})
export class RolesModule {
}
