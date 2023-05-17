import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InternalService {

  baseUrl = `${environment.authorizerUrl}/internal`;

  constructor(private httpClient: HttpClient) {
  }

  getUserPrivileges(userId: String): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/user/" + userId + "/privileges");
  }
}
