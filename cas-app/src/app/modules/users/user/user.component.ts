import {Component, OnDestroy} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {tap} from 'rxjs/operators';
import {InternalService} from '../../../core/auth/internal.service';
import {ResourceComponent} from '../../../shared/abstracts/resource-component';
import {fadeInAnimation} from '../../../shared/animations/fade-in-animation';
import {Organization} from '../../organizations/organizations.interface';
import {OrganizationsService} from '../../organizations/organizations.service';
import {User, UserPrivileges} from '../users.interface';
import {UsersService} from '../users.service';

@Component({
  selector: 'cas-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [fadeInAnimation]
})
export class UserComponent extends ResourceComponent implements OnDestroy {

  user!: User;
  userPrivileges!: UserPrivileges;
  selectedOrganization!: Organization;

  constructor(store: Store, private router: Router, activatedRoute: ActivatedRoute, formBuilder: FormBuilder,
              private internalService: InternalService, private usersService: UsersService, private organizationService: OrganizationsService) {
    super(store, activatedRoute, formBuilder);

    this.user = this.activatedRoute.snapshot.data['user'];
    this.initResourceState('users', this.user);
    this.getUserPrivileges(this.user.id);
    this.selectOrganization(this.user.organizations[0].id)
  }

  private getUserPrivileges(userId: string) {
    this.internalService.getUserPrivileges(userId).pipe(
      tap((response: any) => this.userPrivileges = response)
    ).subscribe();
  }

  selectOrganization(id: string) {
    this.organizationService.getOrganization(id).pipe(
      tap((organization: Organization) => this.selectedOrganization = organization)
    ).subscribe();
  }

  deleteUser(): void {
    this.usersService.deleteUser(this.user.id).pipe(
      tap((response: any) => console.log(response)),
      tap(() => this.router.navigate(['/users']))
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
