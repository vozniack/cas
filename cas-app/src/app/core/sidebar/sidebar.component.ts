import {Component} from '@angular/core';
import {lowerPageStates, upperPageStates} from "../../store/app/app.const";
import {fadeInAnimation} from "../../shared/animations/fade-in-animation";
import {select, Store} from "@ngrx/store";
import {tap} from "rxjs/operators";
import {hasRole} from "../../shared/utils/jwt.util";
import {SELECT_USER_TOKEN} from "../../store/app/app.selectors";

@Component({
  selector: 'cas-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [fadeInAnimation]
})
export class SidebarComponent {

  upperNavigationStates = upperPageStates;
  lowerNavigationStates = lowerPageStates;

  isAdmin = false;

  constructor(private store: Store) {
    this.store.pipe(
      select(SELECT_USER_TOKEN),
      tap((token: string) => this.isAdmin = hasRole(token, 'ADMIN')),
    ).subscribe()
  }
}
