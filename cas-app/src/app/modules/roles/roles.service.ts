import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {RequestParam} from "../../shared/model/request.interface";
import {Observable} from "rxjs";
import {Pageable} from "../../shared/model/pageable.interface";
import {buildHttpParams} from "../../shared/utils/request-param.util";
import {Role} from "./roles.interface";

@Injectable()
export class RolesService {

  baseUrl = `${environment.coreUrl}/v1/roles`;

  constructor(private httpClient: HttpClient) {
  }

  getRoles(requestParam: RequestParam): Observable<Pageable<Role>> {
    return this.httpClient.get<Pageable<Role>>(this.baseUrl, {
      params: buildHttpParams(requestParam)
    })
  }

  getInternalRoles(requestParam: RequestParam): Observable<Pageable<Role>> {
    return this.httpClient.get<Pageable<Role>>(`${this.baseUrl}/internal`, {
      params: buildHttpParams(requestParam)
    })
  }
}
