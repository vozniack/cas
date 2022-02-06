import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TokenGuard} from "./core/auth/guard/token.guard";
import {LoginComponent} from "./core/login/login.component";
import {AdminGuard} from "./core/auth/guard/admin.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [TokenGuard]
  },
  {
    path: 'organizations',
    loadChildren: () => import('./modules/organizations/organizations.module').then(m => m.OrganizationsModule),
    canActivate: [TokenGuard]
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule),
    canActivate: [TokenGuard]
  },
  {
    path: 'roles',
    loadChildren: () => import('./modules/roles/roles.module').then(m => m.RolesModule),
    canActivate: [TokenGuard]
  },
  {
    path: 'privileges',
    loadChildren: () => import('./modules/privileges/privileges.module').then(m => m.PrivilegesModule),
    canActivate: [TokenGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canActivate: [TokenGuard, AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
