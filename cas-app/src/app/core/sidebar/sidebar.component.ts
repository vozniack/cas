import {Component} from '@angular/core';
import {lowerNavigationStates, upperNavigationStates} from "../../shared/store/navigation/navigation.const";
import {fadeInAnimation} from "../../shared/animations/fade-in-animation";
import {select, Store} from "@ngrx/store";
import {UserState} from "../../shared/store/user/user.state";
import {SELECT_USER_TOKEN} from "../../shared/store/user/user.selectors";
import {tap} from "rxjs/operators";
import {hasRole} from "../../shared/utils/jwt.util";

@Component({
  selector: 'cas-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [fadeInAnimation]
})
export class SidebarComponent {

  upperNavigationStates = upperNavigationStates;
  lowerNavigationStates = lowerNavigationStates;

  isAdmin = false;

  constructor(private store: Store<UserState>) {
    this.store.pipe(
      select(SELECT_USER_TOKEN),
      tap((token: string) => this.isAdmin = hasRole(token, 'ADMIN')),
    ).subscribe()
  }
}
