import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";
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
  searchFormControl?: FormControl;

  @Input()
  organizationFormControl?: FormControl;

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
}
