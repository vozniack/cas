import {Component, EventEmitter, Input, Output} from '@angular/core';
import {fadeInAnimation} from '../../../shared/animations/fade-in-animation';
import {fadeOutAnimation} from '../../../shared/animations/fade-out-animation';
import {Toast} from '../toaster.interface';

@Component({
  selector: 'cas-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [fadeInAnimation, fadeOutAnimation]
})
export class ToastComponent {

  @Input()
  toast!: Toast;

  @Output()
  dismissEvent = new EventEmitter();

  constructor() {
    setTimeout(() => this.dismiss(), 2048);
  }

  dismiss() {
    this.dismissEvent.emit();
  }

  setButtonTheme(): 'primary' | 'secondary' | 'default' {
    switch (this.toast.style) {
      case 'info':
        return 'primary';
      case 'warning':
        return 'secondary';
      default:
        return 'default';
    }
  }
}
