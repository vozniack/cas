import {Component, Input} from '@angular/core';
import {fadeInAnimation} from '../../shared/animations/fade-in-animation';

@Component({
  selector: 'cas-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [fadeInAnimation]
})
export class ContentComponent {

  @Input()
  logged!: boolean;
}
