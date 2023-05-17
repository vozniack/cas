import {Component, Input, OnInit} from '@angular/core';
import {tap} from 'rxjs/operators';
import {Organization} from '../../../organizations/organizations.interface';
import {OrganizationsService} from '../../../organizations/organizations.service';
import {User, UserPrivileges} from '../../users.interface';

@Component({
  selector: 'cas-user-privileges',
  templateUrl: './user-privileges.component.html',
  styleUrls: ['./user-privileges.component.scss']
})
export class UserPrivilegesComponent implements OnInit {

  @Input()
  user!: User;

  @Input()
  userPrivileges!: UserPrivileges;

  selectedOrganization!: Organization;

  constructor(private organizationService: OrganizationsService) {
  }

  ngOnInit(): void {
    this.selectOrganization(this.user.organizations[0].id);
  }

  selectOrganization(id: string) {
    this.organizationService.getOrganization(id).pipe(
      tap((organization: Organization) => this.selectedOrganization = organization)
    ).subscribe();
  }
}
