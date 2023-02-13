import {Component, Input} from '@angular/core';
import {Privilege} from '../../privileges.interface';

@Component({
  selector: 'cas-privileges-tree-node',
  templateUrl: './privileges-tree-node.component.html',
  styleUrls: ['./privileges-tree-node.component.scss']
})
export class PrivilegesTreeNodeComponent {

  @Input()
  privilege!: Privilege;

  @Input()
  indent = 24;

  expanded = false;

  expandOrCollapse(): void {
    if (this.privilege.privileges?.length > 0) {
      this.expanded = !this.expanded;
    }
  }

  getChildren(): Privilege[] {
    return [...this.privilege.privileges].sort((p1, p2) => p1.index - p2.index);
  }
}
