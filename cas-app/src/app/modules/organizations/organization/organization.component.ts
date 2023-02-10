import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {ResourceComponent} from '../../../shared/abstracts/resource-component';
import {Organization} from '../organizations.interface';

@Component({
  selector: 'cas-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent extends ResourceComponent implements OnInit, OnDestroy {

  organization!: Organization;

  constructor(store: Store, activatedRoute: ActivatedRoute, formBuilder: FormBuilder) {
    super(store, activatedRoute, formBuilder);

    this.organization = this.activatedRoute.snapshot.data['organization'];
    this.initResourceState('organizations', this.organization);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
