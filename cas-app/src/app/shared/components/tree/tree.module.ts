import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreeComponent} from './tree.component';
import {FlexModule} from "@angular/flex-layout";
import {IconsModule} from "../../../core/icons/icons.module";
import {ControlsModule} from "../controls/controls.module";
import {TreeNodeComponent} from './tree-node/tree-node.component';

@NgModule({
  declarations: [
    TreeComponent,
    TreeNodeComponent
  ],
  exports: [
    TreeComponent
  ],
  imports: [
    CommonModule,
    FlexModule,
    IconsModule,
    ControlsModule
  ]
})
export class TreeModule {
}
