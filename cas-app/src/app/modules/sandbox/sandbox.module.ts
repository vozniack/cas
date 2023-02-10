import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexModule} from '@angular/flex-layout';
import {ControlsModule} from '../../shared/components/controls/controls.module';
import {InputsModule} from '../../shared/components/inputs/inputs.module';
import {SandboxRoutingModule} from './sandbox-routing.module';
import {SandboxComponent} from './sandbox.component';

@NgModule({
  declarations: [
    SandboxComponent
  ],
  imports: [
    CommonModule,
    SandboxRoutingModule,
    FlexModule,
    InputsModule,
    ControlsModule
  ]
})
export class SandboxModule {
}
