import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Organization} from "../organizations/organizations.interface";
import {OrganizationsService} from "../organizations/organizations.service";

@Injectable()
export class AdminResolver implements Resolve<Organization> {

  constructor(private organizationsService: OrganizationsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Organization> {
    return this.organizationsService.getInternalOrganization();
  }
}
