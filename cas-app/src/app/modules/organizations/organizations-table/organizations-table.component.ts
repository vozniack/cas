import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';
import {Pageable} from '../../../shared/model/pageable.interface';
import {RequestParam} from '../../../shared/model/request.interface';
import {Organization} from '../organizations.interface';
import {OrganizationsService} from '../organizations.service';
import {organizationActions, organizationColumns} from './organizations-table.const';

@Component({
  selector: 'cas-organizations-table',
  templateUrl: './organizations-table.component.html',
  styleUrls: ['./organizations-table.component.scss']
})
export class OrganizationsTableComponent implements OnInit, OnDestroy {

  @Input()
  filters!: FormGroup;

  data: Pageable<Organization> = {};
  requestParam: RequestParam = {page: 0, size: 10};

  columns = organizationColumns;
  actions = organizationActions;

  ngDestroyed$ = new Subject<boolean>();

  constructor(private organizationsService: OrganizationsService) {
    this.getOrganizations();
  }

  ngOnInit(): void {
    this.filters.valueChanges.pipe(
      takeUntil(this.ngDestroyed$),
      tap((filters: any) => {
        this.requestParam.page = 0;
        this.requestParam.size = filters.size;
        this.requestParam.search = filters.search;
      }),
      tap(() => this.getOrganizations())
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.ngDestroyed$.next(true);
    this.ngDestroyed$.unsubscribe();
  }

  getOrganizations(): void {
    this.organizationsService.getOrganizations(this.requestParam).pipe(
      tap((response: Pageable<Organization>) => this.data = response),
    ).subscribe();
  }

  onRequestParamChange(requestParam: RequestParam): void {
    this.requestParam = requestParam;
    this.getOrganizations();
  }
}
