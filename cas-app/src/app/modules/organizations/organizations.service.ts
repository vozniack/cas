import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Pageable, PageRequest} from "../../shared/model/pageable.interface";
import {Observable} from "rxjs";
import {Organization} from "./organizations.interface";
import {buildHttpParams} from "../../shared/utils/pageable.util";

@Injectable()
export class OrganizationsService {

  baseUrl = `${environment.coreUrl}/v1/organizations`;

  constructor(private httpClient: HttpClient) {
  }

  getOrganizations(pageRequest: PageRequest): Observable<Pageable<Organization>> {
    return this.httpClient.get<Pageable<Organization>>(this.baseUrl, {
      params: buildHttpParams(pageRequest)
    })
  }
}
