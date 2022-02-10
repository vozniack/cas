import {Component, Input} from '@angular/core';
import {Pageable} from "../../../shared/model/pageable.interface";
import {Organization} from "../organizations.interface";
import {RequestParam} from "../../../shared/model/request.interface";
import {Subject} from "rxjs";

@Component({
  selector: 'cas-organizations-grid',
  templateUrl: './organizations-grid.component.html',
  styleUrls: ['./organizations-grid.component.scss']
})
export class OrganizationsGridComponent {

  @Input()
  data: Pageable<Organization> = {}

  @Input()
  requestParam!: RequestParam

  @Input()
  refresh!: Subject<RequestParam>;
}
