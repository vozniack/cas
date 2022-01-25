import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './table.component';
import {FlexModule} from "@angular/flex-layout";
import {InputsModule} from "../inputs/inputs.module";
import {IconsModule} from "../../../core/icons/icons.module";
import {TableFilterSearchComponent} from './table-filter-search/table-filter-search.component';
import {TablePaginationComponent} from './table-pagination/table-pagination.component';
import {ControlsModule} from "../controls/controls.module";
import {TableActionsComponent} from './table-actions/table-actions.component';
import {TableFilterScopeComponent} from './table-filter-scope/table-filter-scope.component';

@NgModule({
  declarations: [
    TableComponent,
    TableFilterSearchComponent,
    TablePaginationComponent,
    TableActionsComponent,
    TableFilterScopeComponent
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
