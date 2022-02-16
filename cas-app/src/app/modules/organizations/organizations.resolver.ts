import {Organization} from "./organizations.interface";
import {OrganizationsService} from "./organizations.service";
import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable()
export class OrganizationsResolver implements Resolve<Organization> {

  constructor(private organizationsService: OrganizationsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Organization> {
    return this.organizationsService.getOrganization(route.params.id);
  }
}
