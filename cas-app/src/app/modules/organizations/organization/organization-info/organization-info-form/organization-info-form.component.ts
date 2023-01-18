import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Organization} from '../../../organizations.interface';
import {OrganizationsService} from '../../../organizations.service';
import {tap} from 'rxjs';
import {SelectOption} from '../../../../../shared/components/inputs/select-input/select-input.interface';
import {fadeInAnimation} from '../../../../../shared/animations/fade-in-animation';

@Component({
  selector: 'cas-organization-info-form',
  templateUrl: './organization-info-form.component.html',
  styleUrls: ['./organization-info-form.component.scss'],
  animations: [fadeInAnimation]
})
export class OrganizationInfoFormComponent {

  @Input()
  organization!: Organization;

  @Input()
  organizationForm!: FormGroup;

  organizations: Organization[] = [];
  organizationOptions: SelectOption[] = [];

  constructor(private formBuilder: FormBuilder, private organizationsService: OrganizationsService) {
    this.organizationsService.getOrganizationsList().pipe(
      tap((organizations: Organization[]) => this.organizations = organizations),
      tap((organizations: Organization[]) => this.organizationOptions = organizations.map(
        organization => {
          return {name: organization.name, value: organization.id}
        }
      ))
    ).subscribe();
  }

  getControl(controlName: string): FormControl {
    return this.organizationForm.get(controlName) as FormControl;
  }
}
