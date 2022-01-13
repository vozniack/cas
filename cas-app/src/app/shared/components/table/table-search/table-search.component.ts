import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";
import {fadeInAnimation} from "../../../animations/fade-in-animation";

@Component({
  selector: 'cas-table-search',
  templateUrl: './table-search.component.html',
  styleUrls: ['./table-search.component.scss'],
  animations: [fadeInAnimation]
})
export class TableSearchComponent {

  @Input()
  searchFormControl!: FormControl;

  @Input()
  placeholder: string = 'Search...';
}
