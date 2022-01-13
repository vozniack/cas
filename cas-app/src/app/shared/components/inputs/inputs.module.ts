import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextInputComponent} from './text-input/text-input.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FlexModule} from "@angular/flex-layout";
import {IconsModule} from "../../../core/icons/icons.module";

const COMPONENTS = [
  TextInputComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexModule,
    IconsModule
  ]
})
export class InputsModule {
}
