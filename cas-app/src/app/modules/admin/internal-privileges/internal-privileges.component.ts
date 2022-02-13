import {Component} from '@angular/core';
import {fadeInAnimation} from "../../../shared/animations/fade-in-animation";
import {PrivilegesService} from "../../privileges/privileges.service";
import {Pageable} from "../../../shared/model/pageable.interface";
import {Privilege} from "../../privileges/privileges.interface";
import {tap} from "rxjs/operators";
import {mapPrivilegeToTreeNode} from "../../../shared/utils/mapping.util";
import {TreeNode} from "../../../shared/components/tree/tree.interface";

@Component({
  selector: 'cas-internal-privileges',
  templateUrl: './internal-privileges.component.html',
  styleUrls: ['./internal-privileges.component.scss'],
  animations: [fadeInAnimation]
})
export class InternalPrivilegesComponent {

  privileges!: Pageable<Privilege>;
  nodes: TreeNode[] = [];

  constructor(private privilegesService: PrivilegesService) {
    this.privilegesService.getInternalPrivileges({page: 0, size: 64}).pipe(
      tap((privileges: Pageable<Privilege>) => this.privileges = privileges),
      tap(() => this.nodes = this.privileges.content!.filter(privilege => privilege.parentId == null)
        .map(privilege => mapPrivilegeToTreeNode(privilege)))
    ).subscribe();
  }
}
