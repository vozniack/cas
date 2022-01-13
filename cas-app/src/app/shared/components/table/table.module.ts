import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './table.component';
import {FlexModule} from "@angular/flex-layout";
import {InputsModule} from "../inputs/inputs.module";
import {IconsModule} from "../../../core/icons/icons.module";

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
    InputsModule,
    IconsModule
  ]
})
export class TableModule {
}
