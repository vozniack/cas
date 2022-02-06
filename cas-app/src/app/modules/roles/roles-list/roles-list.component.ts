import {Component, Input} from '@angular/core';
import {Pageable} from "../../../shared/model/pageable.interface";
import {Role} from "../roles.interface";
import {RequestParam} from "../../../shared/model/request.interface";
import {Subject} from "rxjs";

@Component({
  selector: 'cas-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss']
})
export class RolesListComponent {

  @Input()
  data: Pageable<Role> = {}

  @Input()
  requestParam!: RequestParam;

  @Input()
  refresh!: Subject<RequestParam>;
}
