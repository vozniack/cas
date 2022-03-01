import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrganizationsComponent} from "./organizations.component";
import {OrganizationViewComponent} from "./organization-view/organization-view.component";
import {OrganizationsResolver} from "./organizations.resolver";
import {OrganizationEditComponent} from "./organization-edit/organization-edit.component";

const routes: Routes = [
  {
    path: '',
    component: OrganizationsComponent
  },
  {
    path: ':id',
    component: OrganizationViewComponent,
    resolve: {
      organization: OrganizationsResolver
    }
  },
  {
    path: ':id/edit',
    component: OrganizationEditComponent,
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
