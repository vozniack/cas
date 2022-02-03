import {Component} from '@angular/core';
import {fadeInAnimation} from "../../../shared/animations/fade-in-animation";
import {RolesService} from "../../roles/roles.service";
import {Role} from "../../roles/roles.interface";
import {tap} from "rxjs/operators";
import {Pageable} from "../../../shared/model/pageable.interface";

@Component({
  selector: 'cas-internal-roles',
  templateUrl: './internal-roles.component.html',
  styleUrls: ['./internal-roles.component.scss'],
  animations: [fadeInAnimation]
})
export class InternalRolesComponent {

  roles!: Pageable<Role>;

  constructor(private rolesService: RolesService) {
    this.rolesService.getInternalRoles({page: 0, size: 64}).pipe(
      tap((roles: Pageable<Role>) => this.roles = roles)
    ).subscribe();
  }
}
