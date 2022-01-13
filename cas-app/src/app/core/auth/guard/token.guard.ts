import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {select, Store} from "@ngrx/store";
import {tap} from "rxjs/operators";
import {UserState} from "../../../shared/store/user/user.state";
import {SELECT_USER_TOKEN} from "../../../shared/store/user/user.selectors";

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
      this.router.navigate(['login']);
    }

    return false;
  }
}
