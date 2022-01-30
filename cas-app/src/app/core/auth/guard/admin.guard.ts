import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {select, Store} from "@ngrx/store";
import {tap} from "rxjs/operators";
import {UserState} from "../../../shared/store/user/user.state";
import {SELECT_USER_TOKEN} from "../../../shared/store/user/user.selectors";
import {ACTION_USER_LOGOUT} from "../../../shared/store/user/user.actions";
import {hasRole} from "../../../shared/utils/jwt.util";

@Injectable()
export class AdminGuard implements CanActivate {

  private role = 'ADMIN';
  private isAdmin = false;

  constructor(private store: Store<UserState>, private router: Router,) {
    this.store.pipe(
      select(SELECT_USER_TOKEN),
      tap((token: string) => this.isAdmin = hasRole(token, this.role)),
    ).subscribe()
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isAdmin) {
      return true;
    } else {
      this.store.dispatch(ACTION_USER_LOGOUT());
      this.router.navigate(['login']).then();
    }

    return false;
  }
}
