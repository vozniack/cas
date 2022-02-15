import {Component, Input, OnInit} from '@angular/core';
import {ListNode} from "../list.interface";
import {Subject} from "rxjs";
import {tap} from "rxjs/operators";

@Component({
  selector: 'cas-list-node',
  templateUrl: './list-node.component.html',
  styleUrls: ['./list-node.component.scss']
})
export class ListNodeComponent implements OnInit {

  @Input()
  node!: ListNode<any>

  @Input()
  itemSelect?: Subject<any>;

  @Input()
  theme: 'light' | 'dark' = 'light';

  @Input()
  selecting = true;

  selected = false;

  ngOnInit(): void {
    this.itemSelect?.pipe(
      tap((data: any) => this.selected = this.node.data === data)
    ).subscribe();
  }

  switchView(): void {
    this.itemSelect?.next(this.selected ? undefined : this.node.data);
  }
}
