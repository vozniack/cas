import {Component} from '@angular/core';
import {navigationStates} from "../../shared/store/navigation/navigation.const";
import {fadeInAnimation} from "../../shared/animations/fade-in-animation";

@Component({
  selector: 'cas-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [fadeInAnimation]
})
export class SidebarComponent {

  navigationStates = navigationStates;
}
