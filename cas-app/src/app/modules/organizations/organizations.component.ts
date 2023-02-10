import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {fadeInAnimation} from '../../shared/animations/fade-in-animation';
import {ACTION_SET_NAVIGATION} from '../../store/app/app.actions';
import {organizationsPageState} from '../../store/app/app.const';
import {OrganizationsService} from './organizations.service';

@Component({
  selector: 'cas-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss'],
  animations: [fadeInAnimation]
})
export class OrganizationsComponent {

  filters: FormGroup = this.formBuilder.group({
    search: new FormControl(null),
  })

  constructor(private organizationsService: OrganizationsService,
              private formBuilder: FormBuilder,
              private store: Store) {
    this.store.dispatch(ACTION_SET_NAVIGATION({page: organizationsPageState}));
  }
}
