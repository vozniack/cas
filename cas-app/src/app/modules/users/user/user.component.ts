import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {ResourceComponent} from '../../../shared/abstracts/resource-component';
import {fadeInAnimation} from '../../../shared/animations/fade-in-animation';
import {User} from '../users.interface';

@Component({
  selector: 'cas-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [fadeInAnimation]
})
export class UserComponent extends ResourceComponent implements OnInit, OnDestroy {

  user!: User;

  constructor(store: Store, activatedRoute: ActivatedRoute, formBuilder: FormBuilder) {
    super(store, activatedRoute, formBuilder);

    this.user = this.activatedRoute.snapshot.data['user'];
    this.initResourceState('users', this.user);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  /* Getters */

  getUserInitials(): string {
    return this.user.firstName.charAt(0) + (this.user.lastName != undefined ? this.user.lastName.charAt(0) : '');
  }
}
