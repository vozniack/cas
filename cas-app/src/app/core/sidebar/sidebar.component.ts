import {Component} from '@angular/core';
import {NAVIGATION_LINKS} from "./sidebar.const";

@Component({
  selector: 'cas-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  navigationLinks = NAVIGATION_LINKS;
}
