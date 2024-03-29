import {Component, Input} from '@angular/core';

@Component({
  selector: 'cas-separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.scss']
})
export class SeparatorComponent {

  @Input()
  position: 'VERTICAL' | 'HORIZONTAL' = 'HORIZONTAL'

  @Input()
  height: string | 'auto' = 'auto';
}
