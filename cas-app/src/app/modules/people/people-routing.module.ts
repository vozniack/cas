import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TokenGuard} from "../../core/auth/guard/token.guard";
import {PeopleComponent} from "./people.component";

const routes: Routes = [
  {
    path: '',
    component: PeopleComponent
  },
  {
    path: 'organizations',
    loadChildren: () => import('./organizations/organizations.module').then(m => m.OrganizationsModule),
    canActivate: [TokenGuard]
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    canActivate: [TokenGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule {
}
