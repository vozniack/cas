import {Component, Input, OnInit} from '@angular/core';
import {Privilege} from '../privileges.interface';

@Component({
  selector: 'cas-privileges-tree',
  templateUrl: './privileges-tree.component.html',
  styleUrls: ['./privileges-tree.component.scss']
})
export class PrivilegesTreeComponent implements OnInit {

  @Input()
  privileges!: Privilege[];

  privilegesTree: Privilege[] = [];

  ngOnInit(): void {
    this.privilegesTree = this.privileges
      .filter((privilege: Privilege) => privilege.parentId == null)
      .sort((p1, p2) => p1.index - p2.index)
  }
}
