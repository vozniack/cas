import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {fadeInAnimation} from '../../../shared/animations/fade-in-animation';
import {Privilege} from '../privileges.interface';

@Component({
  selector: 'cas-privileges-tree',
  templateUrl: './privileges-tree.component.html',
  styleUrls: ['./privileges-tree.component.scss'],
  animations: [fadeInAnimation]
})
export class PrivilegesTreeComponent implements OnInit, OnChanges {

  @Input()
  privileges!: Privilege[];

  privilegesTree: Privilege[] = [];

  ngOnInit(): void {
    this.getPrivileges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getPrivileges();
  }

  getPrivileges(): void {
    this.privilegesTree = this.privileges
      .filter((privilege: Privilege) => privilege.parentId == null)
      .sort((p1, p2) => p1.index - p2.index);
  }
}
