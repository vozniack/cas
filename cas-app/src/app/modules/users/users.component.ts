import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {fadeInAnimation} from '../../shared/animations/fade-in-animation';
import {ACTION_SET_NAVIGATION} from '../../store/app/app.actions';
import {usersPageState} from '../../store/app/app.const';
import {UsersService} from './users.service';

@Component({
  selector: 'cas-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [fadeInAnimation]
})
export class UsersComponent {

  filters: FormGroup = this.formBuilder.group({
    search: new FormControl(null),
    size: new FormControl(10),
    organization: new FormControl(null),
  });

  constructor(private usersService: UsersService,
              private formBuilder: FormBuilder,
              private store: Store) {
    this.store.dispatch(ACTION_SET_NAVIGATION({page: usersPageState}));
  }

  getControl(name: string): FormControl {
    return this.filters.get(name) as FormControl;
  }
}
