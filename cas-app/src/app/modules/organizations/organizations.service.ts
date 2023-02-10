import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Pageable} from '../../shared/model/pageable.interface';
import {RequestParam} from '../../shared/model/request.interface';
import {buildHttpParams} from '../../shared/utils/request-param.util';
import {Organization} from './organizations.interface';

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

  getOrganization(id: string): Observable<Organization> {
    return this.httpClient.get<Organization>(`${this.baseUrl}/${id}`)
  }
}
