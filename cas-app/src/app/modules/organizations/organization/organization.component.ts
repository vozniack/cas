import {Component, OnDestroy, OnInit} from '@angular/core';
import {ResourceComponent} from '../../../shared/abstracts/resource-component';
import {Organization} from '../organizations.interface';
import {ResourceType} from '../../../shared/model/types.interface';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'cas-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent extends ResourceComponent implements OnInit, OnDestroy {

  organization!: Organization;

  organizationForm: FormGroup = this.formBuilder.group({});

  selectedResource: ResourceType = ResourceType.USER;
  ResourceType = ResourceType;

  constructor(store: Store, activatedRoute: ActivatedRoute, formBuilder: FormBuilder) {
    super(store, activatedRoute, formBuilder);

    this.organization = this.activatedRoute.snapshot.data['organization'];
    this.initResourceState('organizations', this.organization);
  }

  ngOnInit(): void {
  }

  onResourceChange(selectedResource: ResourceType): void {
    this.selectedResource = selectedResource;
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
