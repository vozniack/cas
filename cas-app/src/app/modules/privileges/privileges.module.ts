import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrivilegesComponent} from './privileges.component';
import {PrivilegesRoutingModule} from "./privileges-routing.module";

const COMPONENTS = [
  PrivilegesComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    PrivilegesRoutingModule
  ]
})
export class PrivilegesModule {
}
