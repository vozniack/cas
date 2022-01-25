import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button/button.component';
import {IconsModule} from "../../../core/icons/icons.module";
import {FlexModule} from "@angular/flex-layout";

const COMPONENTS = [
  ButtonComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    IconsModule,
    FlexModule
  ]
})
export class ControlsModule {
}
