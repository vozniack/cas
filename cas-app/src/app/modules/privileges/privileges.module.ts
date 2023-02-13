import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexModule} from '@angular/flex-layout';
import {IconsModule} from '../../core/icons/icons.module';
import {ControlsModule} from '../../shared/components/controls/controls.module';
import {PrivilegesTreeNodeComponent} from './privileges-tree/privileges-tree-node/privileges-tree-node.component';
import {PrivilegesTreeComponent} from './privileges-tree/privileges-tree.component';
import {PrivilegesService} from './privileges.service';

const COMPONENTS = [
  PrivilegesTreeComponent,
  PrivilegesTreeNodeComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    IconsModule,
    FlexModule,
    ControlsModule,
  ],
  providers: [
    PrivilegesService
  ]
})
export class PrivilegesModule {
}
