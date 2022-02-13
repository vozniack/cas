import {Component, Input} from '@angular/core';
import {TreeNode} from "./tree.interface";

@Component({
  selector: 'cas-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {

  @Input()
  nodes!: TreeNode[];
}
