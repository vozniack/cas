import {Component, Input, OnInit} from '@angular/core';
import {TreeNode} from "../tree.interface";
import {fadeInAnimation} from "../../../animations/fade-in-animation";
import {Subject} from "rxjs";
import {tap} from "rxjs/operators";

@Component({
  selector: 'cas-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss'],
  animations: [fadeInAnimation]
})
export class TreeNodeComponent implements OnInit {

  @Input()
  node!: TreeNode<any>;

  @Input()
  itemSelect?: Subject<any>;

  @Input()
  theme: 'light' | 'dark' = 'light';

  @Input()
  selecting = true;

  selected = false;
  expanded = false;

  ngOnInit(): void {
    this.itemSelect?.pipe(
      tap((data: any) => this.selected = this.node.data === data)
    ).subscribe();
  }

  expandOrCollapse(): void {
    if (this.node.children.length > 0) {
      this.expanded = !this.expanded;
    }
  }

  switchView(): void {
    this.itemSelect?.next(this.selected ? undefined : this.node.data);
  }
}
