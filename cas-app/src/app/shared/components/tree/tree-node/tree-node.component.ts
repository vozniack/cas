import {Component, Input} from '@angular/core';
import {TreeNode} from "../tree.interface";
import {fadeInAnimation} from "../../../animations/fade-in-animation";

@Component({
  selector: 'cas-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss'],
  animations: [fadeInAnimation]
})
export class TreeNodeComponent {

  @Input()
  node!: TreeNode;

  expanded = false;
}
