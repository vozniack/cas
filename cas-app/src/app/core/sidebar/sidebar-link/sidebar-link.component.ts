import {Component, Input} from '@angular/core';
import {PageState} from "../../../store/app/app.state";

@Component({
  selector: 'cas-sidebar-link',
  templateUrl: './sidebar-link.component.html',
  styleUrls: ['./sidebar-link.component.scss']
})
export class SidebarLinkComponent {

  @Input()
  pageState!: PageState;
}
