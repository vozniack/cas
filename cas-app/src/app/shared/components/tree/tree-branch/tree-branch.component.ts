import {Component, Input} from '@angular/core';
import {TreeNode} from "../tree.interface";

@Component({
  selector: 'cas-tree-branch',
  templateUrl: './tree-branch.component.html',
  styleUrls: ['./tree-branch.component.scss']
})
export class TreeBranchComponent {

  @Input()
  nodes: TreeNode[] = [];
}
