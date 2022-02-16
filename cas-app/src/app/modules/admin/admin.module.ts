import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {OrganizationsService} from "../organizations/organizations.service";
import {OrganizationsModule} from "../organizations/organizations.module";
import {AdminResolver} from "./admin.resolver";

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    OrganizationsModule
  ],
  providers: [
    OrganizationsService,
    AdminResolver
  ]
})
export class AdminModule {
}
