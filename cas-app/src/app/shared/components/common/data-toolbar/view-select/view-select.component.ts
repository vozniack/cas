import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {ViewType} from "../../../../model/types.interface";
import {ViewSelectOption} from "./view-select.interface";
import {fadeInAnimation} from "../../../../animations/fade-in-animation";

@Component({
  selector: 'cas-view-select',
  templateUrl: './view-select.component.html',
  styleUrls: ['./view-select.component.scss'],
  animations: [fadeInAnimation]
})
export class ViewSelectComponent implements OnInit {

  @Input()
  control!: FormControl;

  @Input()
  views!: ViewSelectOption[];

  selectedView: ViewType = ViewType.TABLE;

  ngOnInit(): void {
    this.selectedView = this.control.value;
  }

  switchViewType(viewType: ViewType): void {
    if (this.selectedView !== viewType) {
      this.selectedView = viewType;
      this.control.setValue(this.selectedView);
    }
  }
}
