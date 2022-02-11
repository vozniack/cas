import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {RequestParam} from "../../shared/model/request.interface";
import {Observable} from "rxjs";
import {Pageable} from "../../shared/model/pageable.interface";
import {buildHttpParams} from "../../shared/utils/request-param.util";
import {User} from "./users.interface";

@Injectable()
export class UsersService {

  baseUrl = `${environment.coreUrl}/v1/users`;

  constructor(private httpClient: HttpClient) {
  }

  getUsersPage(requestParam: RequestParam): Observable<Pageable<User>> {
    return this.httpClient.get<Pageable<User>>(`${this.baseUrl}/page`, {
      params: buildHttpParams(requestParam)
    })
  }

  getUsersList(requestParam: RequestParam): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseUrl}/list`, {
      params: buildHttpParams(requestParam)
    })
  }

  getInternalUsers(requestParam: RequestParam): Observable<Pageable<User>> {
    return this.httpClient.get<Pageable<User>>(`${this.baseUrl}/internal`, {
      params: buildHttpParams(requestParam)
    })
  }
}
