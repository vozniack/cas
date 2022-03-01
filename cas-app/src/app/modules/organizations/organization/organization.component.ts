import {Component, Input} from '@angular/core';
import {Organization} from "../organizations.interface";

@Component({
  selector: 'cas-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent {

  @Input()
  organization!: Organization
}
