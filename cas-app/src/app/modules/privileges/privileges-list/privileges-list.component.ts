import {Component, Input} from '@angular/core';
import {Pageable} from "../../../shared/model/pageable.interface";
import {Privilege} from "../privileges.interface";
import {RequestParam} from "../../../shared/model/request.interface";
import {Subject} from "rxjs";
import {fadeInAnimation} from "../../../shared/animations/fade-in-animation";

@Component({
  selector: 'cas-privileges-list',
  templateUrl: './privileges-list.component.html',
  styleUrls: ['./privileges-list.component.scss'],
  animations: [fadeInAnimation]
})
export class PrivilegesListComponent {

  @Input()
  data: Pageable<Privilege> = {}

  @Input()
  requestParam!: RequestParam;

  @Input()
  refresh!: Subject<RequestParam>;
}
