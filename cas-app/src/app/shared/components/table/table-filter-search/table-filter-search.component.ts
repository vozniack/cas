import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";
import {fadeInAnimation} from "../../../animations/fade-in-animation";

@Component({
  selector: 'cas-table-filter-search',
  templateUrl: './table-filter-search.component.html',
  styleUrls: ['./table-filter-search.component.scss'],
  animations: [fadeInAnimation]
})
export class TableFilterSearchComponent {

  @Input()
  formControl!: FormControl;

  @Input()
  placeholder: string = 'Search...';
}
