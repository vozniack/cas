import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {IconsModule} from '../../core/icons/icons.module';
import {CommonComponentsModule} from '../../shared/components/common/common-components.module';
import {ControlsModule} from '../../shared/components/controls/controls.module';
import {InputsModule} from '../../shared/components/inputs/inputs.module';
import {TableModule} from '../../shared/components/table/table.module';
import {OrganizationComponent} from './organization/organization.component';
import {OrganizationsRoutingModule} from './organizations-routing.module';
import {OrganizationsTableComponent} from './organizations-table/organizations-table.component';
import {OrganizationsComponent} from './organizations.component';
import {OrganizationsResolver} from './organizations.resolver';
import {OrganizationsService} from './organizations.service';

@NgModule({
  declarations: [
    OrganizationsComponent,
    OrganizationsTableComponent,
    OrganizationComponent
  ],
  imports: [
    CommonModule,
    OrganizationsRoutingModule,
    FlexModule,
    TableModule,
    InputsModule,
    CommonComponentsModule,
    ControlsModule,
    IconsModule,
    ReactiveFormsModule
  ],
  providers: [
    OrganizationsService,
    OrganizationsResolver
  ]
})
export class OrganizationsModule {
}
