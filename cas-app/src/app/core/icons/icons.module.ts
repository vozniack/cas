import {NgModule} from '@angular/core';
import {FeatherModule} from 'angular-feather';

import {Columns, Home, Key, Shield, User, Users} from 'angular-feather/icons';

const icons = {
  Shield,
  User,
  Home,
  Users,
  Columns,
  Key
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule]
})
export class IconsModule {
}
