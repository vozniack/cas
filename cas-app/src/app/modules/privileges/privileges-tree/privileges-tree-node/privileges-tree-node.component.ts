import {AfterViewInit, ChangeDetectorRef, Component, Input, QueryList, ViewChildren} from '@angular/core';
import {UserPrivileges} from '../../../users/users.interface';
import {Privilege} from '../../privileges.interface';

@Component({
  selector: 'cas-privileges-tree-node',
  templateUrl: './privileges-tree-node.component.html',
  styleUrls: ['./privileges-tree-node.component.scss']
})
export class PrivilegesTreeNodeComponent implements AfterViewInit {

  @Input()
  privilege!: Privilege;

  @Input()
  userPrivileges?: UserPrivileges | undefined;

  @Input()
  indent: number = 24;

  @ViewChildren('childNode')
  components?: QueryList<PrivilegesTreeNodeComponent>;

  expanded: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  expandOrCollapse(): void {
    if (this.privilege.privileges?.length > 0) {
      this.expanded = !this.expanded;
    }
  }

  getChildren(): Privilege[] {
    return [...this.privilege.privileges].sort((p1, p2) => p1.index - p2.index);
  }

  isSelected(): boolean {
    return this.userPrivileges ? this.userPrivileges?.mappedPrivileges.map(p => p.id).includes(this.privilege.id) : false;
  }

  areChildrenSelected(): boolean {
    if (this.privilege.privileges != null && this.privilege.privileges.length > 0 && this.components) {
      return this.components.map(c => c.isSelected() || c.areChildrenSelected()).every(selected => selected);
    } else return false;
  }

  isChildSelected(): boolean {
    if (this.privilege.privileges != null && this.privilege.privileges.length > 0 && this.components) {
      return this.components.find(c => c.isSelected()) != null;
    } else return false;
  }

  getClass(): string {
    if (this.isSelected() || this.areChildrenSelected() || this.isChildSelected()) return 'selected';
    else return '';
  }

  getIconName(): string {
    if (this.areChildrenSelected()) return 'checkmark-done-outline';
    else if (this.isChildSelected()) return 'checkmark-outline';
    else if (this.isSelected()) return 'checkmark-outline';
    else return 'key-outline';
  }
}
