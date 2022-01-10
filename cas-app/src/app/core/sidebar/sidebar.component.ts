import {Component} from '@angular/core';
import {navigationStates} from "../../shared/store/navigation/navigation.const";

@Component({
  selector: 'cas-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  navigationStates = navigationStates;
}
