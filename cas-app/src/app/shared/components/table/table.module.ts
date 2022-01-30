import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './table.component';
import {FlexModule} from "@angular/flex-layout";
import {InputsModule} from "../inputs/inputs.module";
import {IconsModule} from "../../../core/icons/icons.module";
import {TablePaginationComponent} from './table-pagination/table-pagination.component';
import {ControlsModule} from "../controls/controls.module";
import {TableActionsComponent} from './table-actions/table-actions.component';

@NgModule({
  declarations: [
    TableComponent,
    TablePaginationComponent,
    TableActionsComponent,
  ],
  exports: [
    TableComponent
  ],
  imports: [
    CommonModule,
    FlexModule,
    InputsModule,
    IconsModule,
    ControlsModule
  ]
})
export class TableModule {
}
