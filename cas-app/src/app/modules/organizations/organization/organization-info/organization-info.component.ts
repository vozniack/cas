import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Organization} from "../../organizations.interface";
import {fadeInAnimation} from "../../../../shared/animations/fade-in-animation";
import {ResourceType} from '../../../../shared/model/types.interface';

@Component({
  selector: 'cas-organization-info',
  templateUrl: './organization-info.component.html',
  styleUrls: ['./organization-info.component.scss'],
  animations: [fadeInAnimation]
})
export class OrganizationInfoComponent {

  @Input()
  organization!: Organization;

  @Output()
  resourceChange = new EventEmitter<ResourceType>();

  selectedResource: ResourceType = ResourceType.USER;

  ResourceType = ResourceType;

  selectResource(selectedResource: ResourceType): void {
    this.selectedResource = selectedResource;
    this.resourceChange.emit(this.selectedResource)
  }
}
