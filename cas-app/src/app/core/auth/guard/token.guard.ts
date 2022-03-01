import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {select, Store} from "@ngrx/store";
import {tap} from "rxjs/operators";
import {ACTION_USER_LOGOUT} from "../../../store/app/app.actions";
import {SELECT_USER_TOKEN} from "../../../store/app/app.selectors";

@Injectable()
export class TokenGuard implements CanActivate {

  private token = '';

  constructor(private store: Store, private router: Router,) {
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
