import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list.component';
import {ListNodeComponent} from './list-node/list-node.component';
import {FlexModule} from "@angular/flex-layout";
import {IconsModule} from "../../../core/icons/icons.module";
import {ControlsModule} from "../controls/controls.module";

@NgModule({
  declarations: [
    ListComponent,
    ListNodeComponent
  ],
  exports: [ListComponent],
  imports: [
    CommonModule,
    FlexModule,
    IconsModule,
    ControlsModule
  ]
})
export class ListModule {
}
