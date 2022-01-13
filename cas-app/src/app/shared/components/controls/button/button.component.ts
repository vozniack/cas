import {Component, Input} from '@angular/core';

@Component({
  selector: 'cas-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() disabled: boolean = false;
  @Input() active: boolean = false;

  @Input() width: string = '100%';

  @Input() iconLeft?: string = undefined;
  @Input() iconRight?: string = undefined;

  @Input() size: 'tiny' | 'small' | 'normal' = 'normal';
  @Input() theme: 'primary' | 'secondary' | 'default' = 'primary';
}
