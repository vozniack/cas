import {Component, Input} from '@angular/core';
import {Organization} from "../../../organizations/organizations.interface";

@Component({
  selector: 'cas-organization-tile',
  templateUrl: './organization-tile.component.html',
  styleUrls: ['./organization-tile.component.scss']
})
export class OrganizationTileComponent {

  @Input()
  organization!: Organization;

  @Input()
  active!: boolean;
}
