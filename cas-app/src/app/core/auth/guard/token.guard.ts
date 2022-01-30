import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {select, Store} from "@ngrx/store";
import {tap} from "rxjs/operators";
import {UserState} from "../../../shared/store/user/user.state";
import {SELECT_USER_TOKEN} from "../../../shared/store/user/user.selectors";
import {ACTION_USER_LOGOUT} from "../../../shared/store/user/user.actions";

@Injectable()
export class TokenGuard implements CanActivate {

  private token = '';

  constructor(private store: Store<UserState>, private router: Router,) {
    this.store.pipe(
      select(SELECT_USER_TOKEN),
      tap((token: string) => this.token = token),
    ).subscribe()
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.token) {
      return true;
    } else {
      this.store.dispatch(ACTION_USER_LOGOUT());
      this.router.navigate(['login']).then();
    }

    return false;
  }
}
