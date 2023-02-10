import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Toast} from './toaster.interface';

@Injectable()
export class ToasterService {

  public toasts$: Observable<Toast>;
  private _toast = new Subject<Toast>();

  constructor() {
    this.toasts$ = this._toast.asObservable();
  }

  notifyInfo( message: string): void {
    this._toast.next({
      message: message,
      style: 'info'
    });
  }

  notifyWarning(message: string): void {
    this._toast.next({
      message: message,
      style: 'warning'
    });
  }
}
