import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {UserState} from "../../../shared/store/user/user.state";
import {SELECT_USER_TOKEN} from "../../../shared/store/user/user.selectors";
import {tap} from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private header = 'Authorization';
  private token = '';

  constructor(private store: Store<UserState>) {
    this.store.pipe(
      select(SELECT_USER_TOKEN),
      tap((token: string) => this.token = token)
    ).subscribe()
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clone = req.clone({
      headers: req.headers.append(this.header, `Bearer ${this.token}`)
    });

    return next.handle(clone);
  }
}
