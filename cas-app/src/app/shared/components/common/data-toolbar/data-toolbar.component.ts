import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SelectOption} from "../../inputs/select-input/select-input.interface";
import {OrganizationsService} from "../../../../modules/organizations/organizations.service";
import {tap} from "rxjs/operators";
import {Organization} from "../../../../modules/organizations/organizations.interface";

@Component({
  selector: 'cas-data-toolbar',
  templateUrl: './data-toolbar.component.html',
  styleUrls: ['./data-toolbar.component.scss']
})
export class DataToolbarComponent {

  @Input()
  filters?: FormGroup;

  organizationOptions: SelectOption[] = [];

  constructor(private organizationsService: OrganizationsService) {
    this.organizationsService.getOrganizationsList().pipe(
      tap((organizations: Organization[]) => this.organizationOptions = organizations.map(
        organization => {
          return {name: organization.name, value: organization.id}
        }
      ))
    ).subscribe()
  }

  get searchFormControl(): FormControl {
    return this.filters?.get('search') as FormControl;
  }

  get organizationFormControl(): FormControl {
    return this.filters?.get('organization') as FormControl;
  }

  get viewFormControl(): FormControl {
    return this.filters?.get('view') as FormControl;
  }
}
