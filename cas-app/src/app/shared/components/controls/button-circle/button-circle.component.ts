import {Component, Input} from '@angular/core';
import {fadeInAnimation} from '../../../animations/fade-in-animation';

@Component({
  selector: 'cas-button-circle',
  templateUrl: './button-circle.component.html',
  styleUrls: ['./button-circle.component.scss'],
  animations: [fadeInAnimation]
})
export class ButtonCircleComponent {

  @Input() disabled: boolean = false;
  @Input() rotated: boolean = false;

  @Input() icon: string = '';

  @Input() size: 'small' | 'normal' = 'normal';
  @Input() theme: 'default' | 'primary' | 'secondary' = 'default';
}
