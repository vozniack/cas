import {Component, OnDestroy} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {ResourceComponent} from '../../../shared/abstracts/resource-component';
import {fadeInAnimation} from '../../../shared/animations/fade-in-animation';
import {Organization} from '../organizations.interface';

@Component({
  selector: 'cas-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss'],
  animations: [fadeInAnimation]
})
export class OrganizationComponent extends ResourceComponent implements OnDestroy {

  organization!: Organization;

  showUsers = false;

  constructor(store: Store, activatedRoute: ActivatedRoute, formBuilder: FormBuilder) {
    super(store, activatedRoute, formBuilder);

    this.organization = this.activatedRoute.snapshot.data['organization'];
    this.initResourceState('organizations', this.organization);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  toggleUsers(): void {
    this.showUsers = !this.showUsers;
  }
}
