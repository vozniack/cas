import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexModule} from '@angular/flex-layout';
import {IconsModule} from '../../core/icons/icons.module';
import {CommonComponentsModule} from '../../shared/components/common/common-components.module';
import {ControlsModule} from '../../shared/components/controls/controls.module';
import {InputsModule} from '../../shared/components/inputs/inputs.module';
import {TableModule} from '../../shared/components/table/table.module';
import {PrivilegesModule} from '../privileges/privileges.module';
import {RolesModule} from '../roles/roles.module';
import {UserDetailsComponent} from './user/user-details/user-details.component';
import {UserComponent} from './user/user.component';
import {UsersBarComponent} from './users-bar/users-bar.component';
import {UsersListNodeComponent} from './users-list/users-list-node/users-list-node.component';
import {UsersListComponent} from './users-list/users-list.component';
import {UsersRoutingModule} from './users-routing.module';
import {UsersTableComponent} from './users-table/users-table.component';
import {UsersComponent} from './users.component';
import {UsersResolver} from './users.resolver';
import {UsersService} from './users.service';

@NgModule({
  declarations: [
    UsersComponent,
    UsersTableComponent,
    UserComponent,
    UsersListComponent,
    UsersListNodeComponent,
    UsersBarComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    TableModule,
    FlexModule,
    InputsModule,
    CommonComponentsModule,
    IconsModule,
    ControlsModule,
    RolesModule,
    PrivilegesModule
  ],
  exports: [
    UsersListComponent,
    UsersBarComponent
  ],
  providers: [
    UsersService,
    UsersResolver
  ]
})
export class UsersModule {
}
