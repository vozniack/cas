import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {Privilege} from "../../../privileges/privileges.interface";
import {Role} from "../../roles.interface";
import {fadeInAnimation} from "../../../../shared/animations/fade-in-animation";

@Component({
  selector: 'cas-role-tile',
  templateUrl: './role-tile.component.html',
  styleUrls: ['./role-tile.component.scss'],
  animations: [fadeInAnimation]
})
export class RoleTileComponent implements OnInit {

  @Input()
  role!: Role;

  @Input()
  itemSelect!: Subject<any>;

  privileges: Privilege[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.getPrivileges();
  }

  getPrivileges(): void {
    // #todo get role atomic privileges
  }

  closeView(): void {
    this.itemSelect.next(undefined);
  }
}
