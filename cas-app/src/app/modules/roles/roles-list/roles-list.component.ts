import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Subject} from "rxjs";
import {ListNode} from "../../../shared/components/list/list.interface";
import {RequestParam} from "../../../shared/model/request.interface";
import {Role} from "../roles.interface";
import {filter, takeUntil, tap} from "rxjs/operators";
import {ViewType} from "../../../shared/model/types.interface";
import {RolesService} from "../roles.service";
import {RolesMapper} from "../roles-mapper.service";
import {fadeInAnimation} from "../../../shared/animations/fade-in-animation";

@Component({
  selector: 'cas-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss'],
  animations: [fadeInAnimation]
})
export class RolesListComponent {

  @Input()
  filters!: FormGroup;

  itemSelect = new Subject<Role>();
  selectedRole?: Role;

  data: ListNode<Role>[] = [];

  requestParam: RequestParam = {};

  ngDestroyed$ = new Subject<boolean>();

  constructor(private rolesService: RolesService,
              private rolesMapper: RolesMapper) {
    this.getUsers();

    this.itemSelect.pipe(
      takeUntil(this.ngDestroyed$),
      tap((role: Role) => this.selectedRole = role)
    ).subscribe();
  }

  ngOnInit(): void {
    this.filters.valueChanges.pipe(
      takeUntil(this.ngDestroyed$),
      filter((filters: any) => filters.view === ViewType.LIST),
      tap((filters: any) => {
        this.requestParam.search = filters.search;
        this.requestParam.organizationId = filters.organization;
      }),
      tap(() => this.getUsers())
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.ngDestroyed$.next(true);
    this.ngDestroyed$.unsubscribe();
  }

  getUsers(): void {
    this.rolesService.getRolesList(this.requestParam).pipe(
      tap((response: Role[]) => this.data = this.rolesMapper.mapToListNodes(response)),
    ).subscribe()
  }
}
