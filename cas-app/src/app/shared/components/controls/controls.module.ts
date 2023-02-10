import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexModule} from '@angular/flex-layout';
import {IconsModule} from '../../../core/icons/icons.module';
import {ButtonCircleComponent} from './button-circle/button-circle.component';
import {ButtonRectangleComponent} from './button-rectangle/button-rectangle.component';

const COMPONENTS = [
  ButtonRectangleComponent,
  ButtonCircleComponent
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
