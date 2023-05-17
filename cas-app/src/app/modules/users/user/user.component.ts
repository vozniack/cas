import {Component, OnDestroy} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {tap} from 'rxjs/operators';
import {InternalService} from '../../../core/auth/internal.service';
import {ResourceComponent} from '../../../shared/abstracts/resource-component';
import {fadeInAnimation} from '../../../shared/animations/fade-in-animation';
import {User, UserPrivileges} from '../users.interface';

@Component({
  selector: 'cas-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [fadeInAnimation]
})
export class UserComponent extends ResourceComponent implements OnDestroy {

  user!: User;
  userPrivileges!: UserPrivileges;

  constructor(store: Store, activatedRoute: ActivatedRoute, formBuilder: FormBuilder, private internalService: InternalService) {
    super(store, activatedRoute, formBuilder);

    this.user = this.activatedRoute.snapshot.data['user'];
    this.initResourceState('users', this.user);
    this.getUserPrivileges(this.user.id);
  }

  private getUserPrivileges(userId: string) {
    this.internalService.getUserPrivileges(userId).pipe(
      tap((response: any) => this.userPrivileges = response)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
