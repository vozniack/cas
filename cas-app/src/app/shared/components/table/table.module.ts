import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './table.component';
import {FlexModule} from "@angular/flex-layout";
import {InputsModule} from "../inputs/inputs.module";

@NgModule({
  declarations: [
    TableComponent
  ],
  exports: [
    TableComponent
  ],
  imports: [
    CommonModule,
    FlexModule,
    InputsModule
  ]
})
export class TableModule {
}
