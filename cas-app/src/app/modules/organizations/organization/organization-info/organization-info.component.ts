import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Organization} from "../../organizations.interface";
import {fadeInAnimation} from "../../../../shared/animations/fade-in-animation";
import {ResourceType} from '../../../../shared/model/types.interface';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'cas-organization-info',
  templateUrl: './organization-info.component.html',
  styleUrls: ['./organization-info.component.scss'],
  animations: [fadeInAnimation]
})
export class OrganizationInfoComponent {

  @Input()
  organization!: Organization;

  @Input()
  organizationForm!: FormGroup;

  @Input()
  editMode: boolean = false;

  @Output()
  resourceChange = new EventEmitter<ResourceType>();

  selectedResource: ResourceType = ResourceType.USER;
  ResourceType = ResourceType;

  selectResource(selectedResource: ResourceType): void {
    this.selectedResource = selectedResource;
    this.resourceChange.emit(this.selectedResource)
  }
}
