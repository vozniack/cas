import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button/button.component';
import {IconsModule} from "../../../core/icons/icons.module";

const COMPONENTS = [
  ButtonComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    IconsModule
  ]
})
export class ControlsModule {
}
