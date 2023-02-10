import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable()
export class RolesService {

  baseUrl = `${environment.coreUrl}/v1/roles`;

  constructor(private httpClient: HttpClient) {
  }
}
