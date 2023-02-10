import {Component, Input} from '@angular/core';

@Component({
  selector: 'cas-button-rectangle',
  templateUrl: './button-rectangle.component.html',
  styleUrls: ['./button-rectangle.component.scss']
})
export class ButtonRectangleComponent {

  @Input() disabled: boolean = false;

  @Input() width: string = '100%';

  @Input() text?: string;
  @Input() icon?: string;

  @Input() size: 'small' | 'normal' = 'normal';
  @Input() theme: 'default' | 'primary' | 'secondary' = 'default';
}
