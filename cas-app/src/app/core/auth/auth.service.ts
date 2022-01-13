import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginRequest, LoginResponse} from "./auth.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = `${environment.authorizerUrl}/v1/auth`;

  constructor(private httpClient: HttpClient) {
  }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(this.baseUrl, loginRequest)
  }
}
