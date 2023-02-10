import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexModule} from '@angular/flex-layout';
import {IconsModule} from '../../core/icons/icons.module';
import {RolesService} from './roles.service';

@NgModule({
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
