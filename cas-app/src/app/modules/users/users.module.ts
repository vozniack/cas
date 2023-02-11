import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexModule} from '@angular/flex-layout';
import {IconsModule} from '../../core/icons/icons.module';
import {CommonComponentsModule} from '../../shared/components/common/common-components.module';
import {ControlsModule} from '../../shared/components/controls/controls.module';
import {InputsModule} from '../../shared/components/inputs/inputs.module';
import {TableModule} from '../../shared/components/table/table.module';
import {UserComponent} from './user/user.component';
import {UsersRoutingModule} from './users-routing.module';
import {UsersTableComponent} from './users-table/users-table.component';
import {UsersComponent} from './users.component';
import {UsersResolver} from './users.resolver';
import {UsersService} from './users.service';

@NgModule({
  declarations: [
    UsersComponent,
    UsersTableComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    TableModule,
    FlexModule,
    InputsModule,
    CommonComponentsModule,
    IconsModule,
    ControlsModule
  ],
  providers: [
    UsersService,
    UsersResolver
  ]
})
export class UsersModule {
}
