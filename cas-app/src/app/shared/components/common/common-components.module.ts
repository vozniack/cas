import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexModule} from '@angular/flex-layout';
import {IconsModule} from '../../../core/icons/icons.module';
import {DataToolbarComponent} from './data-toolbar/data-toolbar.component';
import {InputsModule} from '../inputs/inputs.module';
import {OrganizationsService} from '../../../modules/organizations/organizations.service';
import {ViewSelectComponent} from './data-toolbar/view-select/view-select.component';
import {ControlsModule} from '../controls/controls.module';
import {ResourceDatesComponent} from './resource-dates/resource-dates.component';
import {SeparatorComponent} from './separator/separator.component';

const COMPONENTS = [
  DataToolbarComponent,
  ViewSelectComponent,
  ResourceDatesComponent,
  SeparatorComponent
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
  ],
  providers: [
    OrganizationsService
  ]
})
export class CommonComponentsModule {
}
