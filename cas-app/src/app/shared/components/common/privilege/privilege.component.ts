import {Component, Input} from '@angular/core';
import {Privilege} from "../../../../modules/privileges/privileges.interface";
import {fadeInAnimation} from "../../../animations/fade-in-animation";

@Component({
  selector: 'cas-privilege',
  templateUrl: './privilege.component.html',
  styleUrls: ['./privilege.component.scss'],
  animations: [fadeInAnimation]
})
export class PrivilegeComponent {

  @Input()
  privilege!: Privilege;

  @Input()
  background: 'basic' | 'inverse' = 'basic';

  isExtended = false;
  isSelected = false;

  extendOrCollapse(): void {
    if (this.privilege.privileges && this.privilege.privileges.length > 0) {
      this.isExtended = !this.isExtended;
    }
  }

  selectOrDeselect(): void {
    this.isSelected = !this.isSelected;
    // #todo dispatch state with selected privilege
  }
}
