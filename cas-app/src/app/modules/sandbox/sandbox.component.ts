import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {SelectOption} from '../../shared/components/inputs/select-input/select-input.interface';
import {ACTION_SET_NAVIGATION} from '../../store/app/app.actions';
import {sandboxState} from '../../store/app/app.const';

@Component({
  selector: 'cas-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent {

  selectOptions: SelectOption[] = [
    {
      name: 'Option 1',
      value: 1
    },
    {
      name: 'Option 2',
      value: 2
    }
  ];

  constructor(private store: Store) {
    this.store.dispatch(ACTION_SET_NAVIGATION({page: sandboxState}));
  }
}
