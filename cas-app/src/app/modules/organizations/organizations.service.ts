import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Pageable} from "../../shared/model/pageable.interface";
import {Observable} from "rxjs";
import {Organization} from "./organizations.interface";
import {buildHttpParams} from "../../shared/utils/request-param.util";
import {RequestParam} from "../../shared/model/request.interface";

@Injectable()
export class OrganizationsService {

  baseUrl = `${environment.coreUrl}/v1/organizations`;

  constructor(private httpClient: HttpClient) {
  }

  getOrganizations(requestParam: RequestParam): Observable<Pageable<Organization>> {
    return this.httpClient.get<Pageable<Organization>>(`${this.baseUrl}/page`, {
      params: buildHttpParams(requestParam)
    })
  }

  getOrganizationParents(requestParam: RequestParam): Observable<Organization[]> {
    return this.httpClient.get<Organization[]>(`${this.baseUrl}/parents`, {
      params: buildHttpParams(requestParam)
    });
  }

  getOrganizationsList(requestParam?: RequestParam): Observable<Organization[]> {
    return this.httpClient.get<Organization[]>(`${this.baseUrl}/list`, {
      params: buildHttpParams(requestParam)
    });
  }

  getInternalOrganization(): Observable<Organization> {
    return this.httpClient.get<Organization>(`${this.baseUrl}/internal`);
  }

  getOrganization(id: string): Observable<Organization> {
    return this.httpClient.get<Organization>(`${this.baseUrl}/${id}`)
  }

  updateOrganization(organization: Organization): Observable<Organization> {
    return this.httpClient.put<Organization>(`${this.baseUrl}/${organization.id}`, organization)
  }
}
