import {Component, Input} from '@angular/core';
import {TreeNode} from "./tree.interface";
import {Subject} from "rxjs";

@Component({
  selector: 'cas-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {

  @Input()
  nodes!: TreeNode<any>[];

  @Input()
  itemSelect?: Subject<any>;

  @Input()
  theme: 'light' | 'dark' = 'light';

  @Input()
  selecting = true;
}
