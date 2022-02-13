import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Privilege} from "../privileges.interface";
import {RequestParam} from "../../../shared/model/request.interface";
import {fadeInAnimation} from "../../../shared/animations/fade-in-animation";
import {TreeNode} from "../../../shared/components/tree/tree.interface";
import {mapPrivilegesToTreeNodes} from "../../../shared/utils/mapping.util";
import {PrivilegesService} from "../privileges.service";
import {filter, takeUntil, tap} from "rxjs/operators";
import {FormGroup} from "@angular/forms";
import {Subject} from "rxjs";
import {ViewType} from "../../../shared/model/types.interface";

@Component({
  selector: 'cas-privileges-tree',
  templateUrl: './privileges-tree.component.html',
  styleUrls: ['./privileges-tree.component.scss'],
  animations: [fadeInAnimation]
})
export class PrivilegesTreeComponent implements OnInit, OnDestroy {

  @Input()
  filters!: FormGroup;

  @Input()
  view!: ViewType;

  data: TreeNode[] = [];

  requestParam: RequestParam = {};

  ngDestroyed$ = new Subject<boolean>();

  constructor(private privilegesService: PrivilegesService) {
    this.getPrivileges();
  }

  ngOnInit(): void {
    this.filters.valueChanges.pipe(
      takeUntil(this.ngDestroyed$),
      filter((filters: any) => filters.view === ViewType.TREE),
      tap((filters: any) => {
        this.requestParam.search = filters.search;
        this.requestParam.organizationId = filters.organization;
      }),
      tap(() => this.getPrivileges())
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.ngDestroyed$.next(true);
    this.ngDestroyed$.unsubscribe();
  }

  getPrivileges(): void {
    this.privilegesService.getPrivilegeParents(this.requestParam).pipe(
      tap((response: Privilege[]) => this.data = mapPrivilegesToTreeNodes(response)),
    ).subscribe()
  }
}
