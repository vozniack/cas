import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {StatisticsComponent} from './statistics/statistics.component';
import {DashboardService} from "./dashboard.service";
import {IconsModule} from "../../core/icons/icons.module";

const COMPONENTS = [
  DashboardComponent,
  StatisticsComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FlexLayoutModule,
    IconsModule
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule {
}
