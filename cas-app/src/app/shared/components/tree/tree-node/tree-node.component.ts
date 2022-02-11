import {Component, Input} from '@angular/core';
import {TreeNode} from "../tree.interface";

@Component({
  selector: 'cas-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent {

  @Input()
  node!: TreeNode;
}
