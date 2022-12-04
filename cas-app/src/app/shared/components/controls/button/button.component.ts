import {Component, Input} from '@angular/core';
import {fadeInAnimation} from "../../../animations/fade-in-animation";

@Component({
  selector: 'cas-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  animations: [fadeInAnimation]
})
export class ButtonComponent {

  @Input() disabled: boolean = false;
  @Input() active: boolean = false;

  @Input() width: string = '100%';

  @Input() iconLeft?: string = undefined;
  @Input() iconRight?: string = undefined;

  @Input() shape: 'rectangle' | 'circle' = 'rectangle';
  @Input() size: 'small' | 'normal' | 'big' = 'normal';
  @Input() theme: 'primary' | 'secondary' | 'light' | 'dark' = 'dark';
}
