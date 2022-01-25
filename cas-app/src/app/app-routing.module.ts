import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TokenGuard} from "./core/auth/guard/token.guard";
import {LoginComponent} from "./core/login/login.component";

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
    path: 'people',
    loadChildren: () => import('./modules/people/people.module').then(m => m.PeopleModule),
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
