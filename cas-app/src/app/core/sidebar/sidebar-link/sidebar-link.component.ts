import {Component, Input} from '@angular/core';
import {NavigationState} from "../../../shared/store/navigation/navigation.state";

@Component({
  selector: 'cas-sidebar-link',
  templateUrl: './sidebar-link.component.html',
  styleUrls: ['./sidebar-link.component.scss']
})
export class SidebarLinkComponent {

  @Input()
  navigationState!: NavigationState;
}
