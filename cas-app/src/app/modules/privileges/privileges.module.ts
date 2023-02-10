import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexModule} from '@angular/flex-layout';
import {IconsModule} from '../../core/icons/icons.module';
import {PrivilegesService} from './privileges.service';

@NgModule({
  imports: [
    CommonModule,
    IconsModule,
    FlexModule,

  ],
  providers: [
    PrivilegesService
  ]
})
export class PrivilegesModule {
}
