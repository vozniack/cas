import {Component} from '@angular/core';
import {fadeInAnimation} from "../../../shared/animations/fade-in-animation";
import {Router} from "@angular/router";

@Component({
  selector: 'cas-organizations-list',
  templateUrl: './organizations-list.component.html',
  styleUrls: ['./organizations-list.component.scss'],
  animations: [fadeInAnimation]
})
export class OrganizationsListComponent {

  constructor(private router: Router) {
  }

  navigateToOrganizations(): void {
    this.router.navigate(['people/organizations']).then();
  }
}
