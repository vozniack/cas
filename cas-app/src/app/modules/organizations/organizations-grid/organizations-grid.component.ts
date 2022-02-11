import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'cas-organizations-grid',
  templateUrl: './organizations-grid.component.html',
  styleUrls: ['./organizations-grid.component.scss']
})
export class OrganizationsGridComponent {
  
  @Input()
  filters!: FormGroup;
}
