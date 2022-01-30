import {Component, Input} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {fadeInAnimation} from "../../../animations/fade-in-animation";

@Component({
  selector: 'cas-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  animations: [fadeInAnimation]
})
export class TextInputComponent {

  @Input() control: FormControl = new FormControl();

  @Input() id: string = ''
  @Input() type: string = 'text';

  @Input() name: string = '';
  @Input() description: string = '';
  @Input() placeholder: string = '';
  @Input() icon: string = '';

  @Input() requiredLabel: boolean = false;
  @Input() width: string = '100%';

  @Input() theme: 'primary' | 'secondary' = 'primary';
  @Input() background: 'basic' | 'dark' = 'basic';

  isRequired(): boolean {
    return this.control.hasValidator(Validators.required);
  }
}
