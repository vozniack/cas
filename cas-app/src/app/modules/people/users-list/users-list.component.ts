import {Component} from '@angular/core';
import {fadeInAnimation} from "../../../shared/animations/fade-in-animation";
import {Router} from "@angular/router";

@Component({
  selector: 'cas-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  animations: [fadeInAnimation]
})
export class UsersListComponent {

  constructor(private router: Router) {
  }

  navigateToUsers(): void {
    this.router.navigate(['people/users']).then();
  }
}
