import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";
import {SelectOption} from "../../inputs/select-input/select-input.interface";
import {ScopeType} from "../../../model/types.interface";
import {fadeInAnimation} from "../../../animations/fade-in-animation";

@Component({
  selector: 'cas-table-filter-scope',
  templateUrl: './table-filter-scope.component.html',
  styleUrls: ['./table-filter-scope.component.scss'],
  animations: [fadeInAnimation]
})
export class TableFilterScopeComponent {

  @Input()
  formControl!: FormControl;

  @Input()
  placeholder: string = 'Select scope...';

  options: SelectOption[] = [
    {
      name: 'Internal',
      value: ScopeType.INTERNAL
    },
    {
      name: 'External',
      value: ScopeType.EXTERNAL
    }
  ]
}
