import {Component, Input} from '@angular/core';
import {fadeInAnimation} from "../../../shared/animations/fade-in-animation";
import {OrganizationsService} from "../../organizations/organizations.service";
import {Pageable} from "../../../shared/model/pageable.interface";
import {Organization} from "../../organizations/organizations.interface";
import {RequestParam} from "../../../shared/model/request.interface";
import {tap} from "rxjs/operators";
import {Subject} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'cas-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss'],
  animations: [fadeInAnimation]
})
export class OrganizationsComponent {

  @Input()
  organizationRefresh!: Subject<Organization>;

  data: Pageable<Organization> = {}
  requestParam: RequestParam = {page: 0, size: 10};
  searchControl = new FormControl(null);

  activeOrganization?: Organization;

  constructor(private organizationsService: OrganizationsService) {
    this.getOrganizations();

    this.searchControl.valueChanges.pipe(
      tap((search: string) => this.requestParam.search = search),
      tap(() => this.getOrganizations())
    ).subscribe();
  }

  getOrganizations(): void {
    this.organizationsService.getOrganizations(this.requestParam).pipe(
      tap((response: Pageable<Organization>) => this.data = response)
    ).subscribe()
  }

  activate(organization: Organization): void {
    this.activeOrganization = this.activeOrganization != organization ? organization : undefined;
    this.organizationRefresh.next(this.activeOrganization);
  }
}
