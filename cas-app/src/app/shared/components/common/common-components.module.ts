import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexModule} from '@angular/flex-layout';
import {IconsModule} from '../../../core/icons/icons.module';
import {ControlsModule} from '../controls/controls.module';
import {InputsModule} from '../inputs/inputs.module';
import {AvatarComponent} from './avatar/avatar.component';
import {SeparatorComponent} from './separator/separator.component';

const COMPONENTS = [
  SeparatorComponent,
  AvatarComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    FlexModule,
    IconsModule,
    InputsModule,
    ControlsModule
  ]
})
export class CommonComponentsModule {
}
