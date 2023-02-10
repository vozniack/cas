import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {ReplaySubject} from 'rxjs';
import {ACTION_INIT_RESOURCE} from '../../store/app/app.actions';

export abstract class ResourceComponent {

  protected destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  protected constructor(protected store: Store,
                        protected activatedRoute: ActivatedRoute,
                        protected formBuilder: FormBuilder) {
  }

  protected initResourceState(name: 'organizations' | 'users' | 'roles' | 'privileges', resource: any) {
    this.store.dispatch(ACTION_INIT_RESOURCE({
      resource: {
        name: name,
        id: resource.id,
        payload: resource
      }
    }));
  }
}
