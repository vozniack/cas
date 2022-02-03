import {Component} from '@angular/core';
import {OrganizationsService} from "../../organizations/organizations.service";
import {Organization} from "../../organizations/organizations.interface";
import {tap} from "rxjs/operators";
import {fadeInAnimation} from "../../../shared/animations/fade-in-animation";

@Component({
  selector: 'cas-internal-info',
  templateUrl: './internal-info.component.html',
  styleUrls: ['./internal-info.component.scss'],
  animations: [fadeInAnimation]
})
export class InternalInfoComponent {

  organization!: Organization;

  constructor(private organizationsService: OrganizationsService) {
    this.organizationsService.getInternalOrganization().pipe(
      tap((organization: Organization) => this.organization = organization)
    ).subscribe();
  }
}
