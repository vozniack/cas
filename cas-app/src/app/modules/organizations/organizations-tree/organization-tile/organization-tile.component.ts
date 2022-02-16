import {Component, Input} from '@angular/core';
import {Organization} from "../../organizations.interface";
import {Subject} from "rxjs";
import {fadeInAnimation} from "../../../../shared/animations/fade-in-animation";
import {Router} from "@angular/router";

@Component({
  selector: 'cas-organization-tile',
  templateUrl: './organization-tile.component.html',
  styleUrls: ['./organization-tile.component.scss'],
  animations: [fadeInAnimation]
})
export class OrganizationTileComponent {

  @Input()
  organization!: Organization;

  @Input()
  itemSelect!: Subject<any>;

  constructor(private router: Router) {
  }

  closeView(): void {
    this.itemSelect.next(undefined);
  }

  showOrganization(): void {
    this.router.navigate([`/organizations/${this.organization.id}`]).then();
  }
}
