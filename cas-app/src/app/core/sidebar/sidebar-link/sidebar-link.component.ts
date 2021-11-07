import {Component, Input} from '@angular/core';
import {NavigationLink} from "../../../model/app/navigation-link";

@Component({
  selector: 'cas-sidebar-link',
  templateUrl: './sidebar-link.component.html',
  styleUrls: ['./sidebar-link.component.scss']
})
export class SidebarLinkComponent {

  @Input()
  navigationLink!: NavigationLink;
}
