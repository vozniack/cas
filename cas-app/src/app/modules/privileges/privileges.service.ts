import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {RequestParam} from "../../shared/model/request.interface";
import {Observable} from "rxjs";
import {Pageable} from "../../shared/model/pageable.interface";
import {buildHttpParams} from "../../shared/utils/request-param.util";
import {Privilege} from "./privileges.interface";

@Injectable()
export class PrivilegesService {

  baseUrl = `${environment.coreUrl}/v1/privileges`;

  constructor(private httpClient: HttpClient) {
  }

  getPrivileges(requestParam: RequestParam): Observable<Pageable<Privilege>> {
    return this.httpClient.get<Pageable<Privilege>>(`${this.baseUrl}/page`, {
      params: buildHttpParams(requestParam)
    })
  }

  getPrivilegeParents(requestParam: RequestParam): Observable<Privilege[]> {
    return this.httpClient.get<Privilege[]>(`${this.baseUrl}/parents`, {
      params: buildHttpParams(requestParam)
    })
  }

  getInternalPrivileges(requestParam: RequestParam): Observable<Pageable<Privilege>> {
    return this.httpClient.get<Pageable<Privilege>>(`${this.baseUrl}/internal`, {
      params: buildHttpParams(requestParam)
    })
  }
}
