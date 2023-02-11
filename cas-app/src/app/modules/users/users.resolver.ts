import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from './users.interface';
import {UsersService} from './users.service';

@Injectable()
export class UsersResolver implements Resolve<User> {

  constructor(private usersService: UsersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.usersService.getUser(route.params.id);
  }
}
