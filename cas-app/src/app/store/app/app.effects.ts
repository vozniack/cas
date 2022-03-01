import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";
import {map, tap} from "rxjs/operators";
import {
  ACTION_EDIT_RESOURCE,
  ACTION_ENABLE_EDIT,
  ACTION_RESOURCE_REDIRECTED,
  ACTION_SET_RESOURCE,
  ACTION_USER_LOGIN,
  ACTION_USER_LOGOUT,
  ACTION_VIEW_RESOURCE
} from "./app.actions";
import {ResourceState} from "./app.state";

@Injectable()
export class AppEffects {

  constructor(private actions: Actions, private router: Router) {
  }

  /* User */

  logout$ = createEffect(() =>
    this.actions.pipe(
      ofType(ACTION_USER_LOGOUT.type),
      map(() => ACTION_USER_LOGIN({user: {}}))
    )
  )

  /* Resource */

  setResource = createEffect(() =>
    this.actions.pipe(
      ofType(ACTION_SET_RESOURCE.type),
      map(() => ACTION_ENABLE_EDIT())
    )
  )

  viewResource$ = createEffect(() => {
      return this.actions.pipe(
        ofType(ACTION_VIEW_RESOURCE.type),
        map((action: any) => action.resource),
        tap((state: ResourceState) => this.router.navigate([`/${state.name}/${state.id}`])),
        map(() => ACTION_RESOURCE_REDIRECTED())
      );
    }
  )

  editResource$ = createEffect(() => {
      return this.actions.pipe(
        ofType(ACTION_EDIT_RESOURCE.type),
        map((action: any) => action.resource),
        tap((state: ResourceState) => this.router.navigate([`/${state.name}/${state.id}/edit`])),
        map(() => ACTION_RESOURCE_REDIRECTED())
      );
    }
  )
}
