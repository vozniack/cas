import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'roles',
    loadChildren: () => import('./modules/roles/roles.module').then(m => m.RolesModule)
  },
  {
    path: 'privileges',
    loadChildren: () => import('./modules/privileges/privileges.module').then(m => m.PrivilegesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
