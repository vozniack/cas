import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Organization} from "../organizations.interface";

@Component({
  selector: 'cas-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent {

  organization!: Organization;

  constructor(private activatedRoute: ActivatedRoute) {
    this.organization = this.activatedRoute.snapshot.data['organization'];
  }
}
