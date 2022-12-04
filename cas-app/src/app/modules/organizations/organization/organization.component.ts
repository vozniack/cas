import {Component, Input} from '@angular/core';
import {Organization} from "../organizations.interface";
import {ResourceType} from '../../../shared/model/types.interface';

@Component({
  selector: 'cas-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent {

  @Input()
  organization!: Organization

  selectedResource: ResourceType = ResourceType.USER;

  ResourceType = ResourceType;

  onResourceChange(selectedResource: ResourceType): void {
    this.selectedResource = selectedResource;
  }
}
