import {Component, Input} from '@angular/core';
import {fadeInAnimation} from '../../../../../shared/animations/fade-in-animation';
import {Organization} from '../../../organizations.interface';

@Component({
  selector: 'cas-organization-info-view',
  templateUrl: './organization-info-view.component.html',
  styleUrls: ['./organization-info-view.component.scss'],
  animations: [fadeInAnimation]
})
export class OrganizationInfoViewComponent {

  @Input()
  organization!: Organization;
}
