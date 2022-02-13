import {Component} from '@angular/core';
import {fadeInAnimation} from "../../../shared/animations/fade-in-animation";
import {PrivilegesService} from "../../privileges/privileges.service";
import {Pageable} from "../../../shared/model/pageable.interface";
import {Privilege} from "../../privileges/privileges.interface";
import {map, tap} from "rxjs/operators";
import {TreeNode} from "../../../shared/components/tree/tree.interface";
import {PrivilegeMapperService} from "../../privileges/privilege.mapper.service";

@Component({
  selector: 'cas-internal-privileges',
  templateUrl: './internal-privileges.component.html',
  styleUrls: ['./internal-privileges.component.scss'],
  animations: [fadeInAnimation]
})
export class InternalPrivilegesComponent {

  privileges!: Pageable<Privilege>;
  nodes: TreeNode[] = [];

  constructor(private privilegesService: PrivilegesService,
              private privilegeMapper: PrivilegeMapperService) {
    this.privilegesService.getInternalPrivileges({page: 0, size: 64}).pipe(
      tap((privileges: Pageable<Privilege>) => this.privileges = privileges),
      map((privileges: Pageable<Privilege>) => privileges.content!.filter(privilege => privilege.parentId == null)),
      tap((privileges: Privilege[]) => this.nodes = this.privilegeMapper.mapToTreeNodes(privileges))
    ).subscribe();
  }
}
