import {Component, Input} from '@angular/core';
import {Organization} from "../../organizations.interface";
import {fadeInAnimation} from "../../../../shared/animations/fade-in-animation";

@Component({
  selector: 'cas-organization-info',
  templateUrl: './organization-info.component.html',
  styleUrls: ['./organization-info.component.scss'],
  animations: [fadeInAnimation]
})
export class OrganizationInfoComponent {

  @Input()
  organization!: Organization;
}
