import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../users.interface";
import {Subject} from "rxjs";
import {Privilege} from "../../../privileges/privileges.interface";
import {fadeInAnimation} from "../../../../shared/animations/fade-in-animation";

@Component({
  selector: 'cas-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.scss'],
  animations: [fadeInAnimation]
})
export class UserTileComponent implements OnInit {

  @Input()
  user!: User;

  @Input()
  itemSelect!: Subject<any>;

  privileges: Privilege[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.getPrivileges();
  }

  getPrivileges(): void {
    // #todo get user atomic privileges
  }

  closeView(): void {
    this.itemSelect.next(undefined);
  }
}
