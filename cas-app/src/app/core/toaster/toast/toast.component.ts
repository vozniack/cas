import {Component, EventEmitter, Input, Output} from '@angular/core';
import {fadeInAnimation} from '../../../shared/animations/fade-in-animation';
import {Toast} from '../toaster.interface';

@Component({
  selector: 'cas-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [fadeInAnimation]
})
export class ToastComponent {

  @Input()
  toast!: Toast;

  @Output()
  dismissEvent = new EventEmitter();

  constructor() {
    setTimeout(() => this.dismiss(), 5120)
  }

  dismiss() {
    this.dismissEvent.emit();
  }
}
