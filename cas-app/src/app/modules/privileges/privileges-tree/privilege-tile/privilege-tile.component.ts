import {Component, Input} from '@angular/core';
import {Privilege} from "../../privileges.interface";
import {Subject} from "rxjs";
import {fadeInAnimation} from '../../../../shared/animations/fade-in-animation';

@Component({
  selector: 'cas-privilege-tile',
  templateUrl: './privilege-tile.component.html',
  styleUrls: ['./privilege-tile.component.scss'],
  animations: [fadeInAnimation]
})
export class PrivilegeTileComponent {

  @Input()
  privilege!: Privilege;

  @Input()
  itemSelect!: Subject<any>;

  closeView(): void {
    this.itemSelect.next(undefined);
  }
}
