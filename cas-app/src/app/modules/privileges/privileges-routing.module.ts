import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PrivilegesComponent} from "./privileges.component";

const routes: Routes = [
  {
    path: '',
    component: PrivilegesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivilegesRoutingModule {
}
