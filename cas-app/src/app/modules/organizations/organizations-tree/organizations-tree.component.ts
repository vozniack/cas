import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {OrganizationsService} from "../organizations.service";
import {TreeNode} from "../../../shared/components/tree/tree.interface";
import {RequestParam} from "../../../shared/model/request.interface";
import {Subject} from "rxjs";
import {filter, takeUntil, tap} from "rxjs/operators";
import {ViewType} from "../../../shared/model/types.interface";
import {Organization} from "../organizations.interface";
import {fadeInAnimation} from "../../../shared/animations/fade-in-animation";
import {OrganizationMapperService} from "../organization.mapper.service";

@Component({
  selector: 'cas-organizations-tree',
  templateUrl: './organizations-tree.component.html',
  styleUrls: ['./organizations-tree.component.scss'],
  animations: [fadeInAnimation]
})
export class OrganizationsTreeComponent implements OnInit, OnDestroy {

  @Input()
  filters!: FormGroup;

  itemSelect = new Subject<Organization>();
  selectedOrganization?: Organization;

  data: TreeNode<Organization>[] = [];

  requestParam: RequestParam = {};

  ngDestroyed$ = new Subject<boolean>();

  constructor(private organizationsService: OrganizationsService,
              private organizationsMapper: OrganizationMapperService) {
    this.getOrganizations();

    this.itemSelect.pipe(
      tap((organization: Organization) => this.selectedOrganization = organization)
    ).subscribe();
  }

  ngOnInit(): void {
    this.filters.valueChanges.pipe(
      takeUntil(this.ngDestroyed$),
      filter((filters: any) => filters.view === ViewType.TREE),
      tap((filters: any) => {
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
    this.organizationsService.getOrganizationParents(this.requestParam).pipe(
      tap((response: Organization[]) => this.data = this.organizationsMapper.mapToTreeNodes(response)),
    ).subscribe()
  }
}
