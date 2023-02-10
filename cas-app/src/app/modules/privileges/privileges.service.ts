import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable()
export class PrivilegesService {

  baseUrl = `${environment.coreUrl}/v1/privileges`;

  constructor(private httpClient: HttpClient) {
  }
}
