import {Component, Input} from '@angular/core';
import {Organization} from "../organizations.interface";

@Component({
  selector: 'cas-organization-view',
  templateUrl: './organization-view.component.html',
  styleUrls: ['./organization-view.component.scss']
})
export class OrganizationViewComponent {

  @Input()
  organization!: Organization
}
