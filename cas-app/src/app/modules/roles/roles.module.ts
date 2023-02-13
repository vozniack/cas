import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexModule} from '@angular/flex-layout';
import {IconsModule} from '../../core/icons/icons.module';
import {RolesListNodeComponent} from './roles-list/roles-list-node/roles-list-node.component';
import {RolesListComponent} from './roles-list/roles-list.component';
import {RolesService} from './roles.service';

const COMPONENTS = [
  RolesListComponent,
  RolesListNodeComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    FlexModule,
    IconsModule
  ],
  providers: [
    RolesService
  ]
})
export class RolesModule {
}
