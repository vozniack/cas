import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreeComponent} from './tree.component';
import {FlexModule} from "@angular/flex-layout";
import {IconsModule} from "../../../core/icons/icons.module";
import {ControlsModule} from "../controls/controls.module";
import {TreeNodeComponent} from './tree-node/tree-node.component';
import {TreeBranchComponent} from './tree-branch/tree-branch.component';

@NgModule({
  declarations: [
    TreeComponent,
    TreeNodeComponent,
    TreeBranchComponent
  ],
  exports: [
    TreeComponent,
    TreeNodeComponent
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
