import {NgModule} from '@angular/core';
import {FeatherModule} from 'angular-feather';

import {User} from 'angular-feather/icons';

const icons = {
  User
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule]
})
export class IconsModule {
}
