import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexModule} from '@angular/flex-layout';
import {IconsModule} from '../../../core/icons/icons.module';
import {CommonComponentsModule} from '../common/common-components.module';
import {ControlsModule} from '../controls/controls.module';
import {InputsModule} from '../inputs/inputs.module';
import {TableActionsComponent} from './table-actions/table-actions.component';
import {TablePaginationComponent} from './table-pagination/table-pagination.component';
import {TableComponent} from './table.component';

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
    ControlsModule,
    CommonComponentsModule
  ]
})
export class TableModule {
}
