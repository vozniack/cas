import {Component, Input} from '@angular/core';
import {TreeNode} from "../tree.interface";
import {Subject} from "rxjs";

@Component({
  selector: 'cas-tree-branch',
  templateUrl: './tree-branch.component.html',
  styleUrls: ['./tree-branch.component.scss']
})
export class TreeBranchComponent {

  @Input()
  nodes: TreeNode<any>[] = [];

  @Input()
  itemSelect?: Subject<any>;

  @Input()
  theme: 'light' | 'dark' = 'light';

  @Input()
  selecting = true;
}
