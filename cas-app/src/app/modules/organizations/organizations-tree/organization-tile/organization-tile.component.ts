import {Component, Input} from '@angular/core';
import {Organization} from "../../organizations.interface";
import {Subject} from "rxjs";
import {fadeInAnimation} from "../../../../shared/animations/fade-in-animation";
import {Store} from "@ngrx/store";
import {ACTION_VIEW_RESOURCE} from "../../../../store/app/app.actions";

@Component({
  selector: 'cas-organization-tile',
  templateUrl: './organization-tile.component.html',
  styleUrls: ['./organization-tile.component.scss'],
  animations: [fadeInAnimation]
})
export class OrganizationTileComponent {

  @Input()
  organization!: Organization;

  @Input()
  itemSelect!: Subject<any>;

  constructor(private store: Store) {
  }

  closeView(): void {
    this.itemSelect.next(undefined);
  }

  showOrganization(): void {
    this.store.dispatch(ACTION_VIEW_RESOURCE({resource: {name: 'organizations', id: this.organization.id}}))
  }
}
