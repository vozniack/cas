import {Component, ElementRef, HostListener, Input} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {fadeInAnimation} from '../../../animations/fade-in-animation';
import {fadeOutAnimation} from '../../../animations/fade-out-animation';
import {SelectOption} from './select-input.interface';

@Component({
  selector: 'cas-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
  animations: [fadeInAnimation, fadeOutAnimation]
})
export class SelectInputComponent {

  @Input() control: FormControl = new FormControl();

  @Input() options: SelectOption[] = [];

  @Input() id: string = ''

  @Input() name: string = '';
  @Input() description: string = '';
  @Input() placeholder: string = '';

  @Input() allowEmpty: boolean = true;
  @Input() requiredLabel: boolean = false;
  @Input() width: string = '100%';

  active = false;

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('document:click', ['$event'])
  documentClickListener(event: any): void {
    this.active = !!this.elementRef.nativeElement.contains(event.target);
  }

  setValue(value: any): void {
    this.control.patchValue(value);
    setTimeout(() => this.active = false, 16);
  }

  getOptionName(): string | undefined {
    return this.options.find(option => option.value === this.control.value)?.name;
  }

  isRequired(): boolean {
    return this.control.hasValidator(Validators.required);
  }

  clear(): void {
    this.control.setValue(null);
  }
}
