import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexModule} from "@angular/flex-layout";
import {IconsModule} from "../../../core/icons/icons.module";
import {DataToolbarComponent} from './data-toolbar/data-toolbar.component';
import {InputsModule} from "../inputs/inputs.module";
import {OrganizationsService} from "../../../modules/organizations/organizations.service";
import {ViewSelectComponent} from './data-toolbar/view-select/view-select.component';
import {ControlsModule} from "../controls/controls.module";

const COMPONENTS = [
  DataToolbarComponent,
  ViewSelectComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    FlexModule,
    IconsModule,
    InputsModule,
    ControlsModule
  ],
  providers: [
    OrganizationsService
  ]
})
export class CommonComponentsModule {
}
