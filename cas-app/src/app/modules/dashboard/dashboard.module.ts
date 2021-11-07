import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {DashboardRoutingModule} from "./dashboard-routing.module";

const COMPONENTS = [
  DashboardComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FlexLayoutModule
  ]
})
export class DashboardModule {
}
