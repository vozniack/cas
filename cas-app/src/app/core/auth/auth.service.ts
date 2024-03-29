import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {LoginRequest, LoginResponse} from './auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = `${environment.authorizerUrl}/auth`;

  constructor(private httpClient: HttpClient) {
  }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(this.baseUrl, loginRequest)
  }
}
