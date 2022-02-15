import {Component, Input} from '@angular/core';
import {ListNode} from "./list.interface";
import {Subject} from "rxjs";
import {fadeInAnimation} from "../../animations/fade-in-animation";

@Component({
  selector: 'cas-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [fadeInAnimation]
})
export class ListComponent {

  @Input()
  nodes!: ListNode<any>[];

  @Input()
  itemSelect?: Subject<any>;

  @Input()
  theme: 'light' | 'dark' = 'light';

  @Input()
  selecting = true;
}
