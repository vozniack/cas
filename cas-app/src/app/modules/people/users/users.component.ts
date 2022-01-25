import {Component, Input, OnInit} from '@angular/core';
import {fadeInAnimation} from "../../../shared/animations/fade-in-animation";
import {Pageable} from "../../../shared/model/pageable.interface";
import {User} from "../../users/users.interface";
import {RequestParam} from "../../../shared/model/request.interface";
import {tap} from "rxjs/operators";
import {UsersService} from "../../users/users.service";
import {Subject} from "rxjs";
import {Organization} from "../../organizations/organizations.interface";
import {fadeOutAnimation} from "../../../shared/animations/fade-out-animation";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'cas-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [fadeInAnimation, fadeOutAnimation]
})
export class UsersComponent implements OnInit {

  @Input()
  organizationRefresh!: Subject<Organization>;

  data: Pageable<User> = {}
  requestParam: RequestParam = {page: 0, size: 10};
  searchControl = new FormControl(null);

  organization?: Organization;

  constructor(private usersService: UsersService) {
    this.searchControl.valueChanges.pipe(
      tap((search: string) => this.requestParam.search = search),
      tap(() => this.getUsers())
    ).subscribe();
  }

  ngOnInit(): void {
    this.organizationRefresh.pipe(
      tap((organization: Organization) => this.organization = organization)
    ).subscribe();
  }

  getUsers(): void {
    this.usersService.getUsers(this.requestParam).pipe(
      tap((response: Pageable<User>) => this.data = response)
    ).subscribe()
  }

  onRequestParamChange(requestParam: RequestParam): void {
    this.requestParam = requestParam;
    this.getUsers();
  }
}
