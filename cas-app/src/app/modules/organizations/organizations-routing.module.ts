import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrganizationsComponent} from "./organizations.component";
import {OrganizationsResolver} from "./organizations.resolver";
import {OrganizationComponent} from './organization/organization.component';

const routes: Routes = [
  {
    path: '',
    component: OrganizationsComponent
  },
  {
    path: ':id',
    component: OrganizationComponent,
    resolve: {
      organization: OrganizationsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationsRoutingModule {
}
