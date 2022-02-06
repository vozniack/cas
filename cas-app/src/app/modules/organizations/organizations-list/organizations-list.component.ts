import {Component, Input} from '@angular/core';
import {Pageable} from "../../../shared/model/pageable.interface";
import {Organization} from "../organizations.interface";
import {RequestParam} from "../../../shared/model/request.interface";
import {Subject} from "rxjs";

@Component({
  selector: 'cas-organizations-list',
  templateUrl: './organizations-list.component.html',
  styleUrls: ['./organizations-list.component.scss']
})
export class OrganizationsListComponent {

  @Input()
  data: Pageable<Organization> = {}

  @Input()
  requestParam!: RequestParam

  @Input()
  refresh!: Subject<RequestParam>;
}
