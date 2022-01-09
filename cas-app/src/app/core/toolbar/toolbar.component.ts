import {Component} from '@angular/core';

@Component({
  selector: 'cas-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  title = 'Dashboard'
  subtitle = 'Manage your security'
}
