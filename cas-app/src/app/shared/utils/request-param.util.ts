import {HttpParams} from "@angular/common/http";
import {RequestParam, SortRequest} from "../model/request.interface";

export function buildHttpParams(requestParam: RequestParam): HttpParams {
  let httpParams: HttpParams = new HttpParams();

  httpParams = appendIfNotNull(httpParams, 'page', requestParam.page);
  httpParams = appendIfNotNull(httpParams, 'size', requestParam.size);
  httpParams = appendSortIfNotNull(httpParams, 'sort', requestParam.sort);
  httpParams = appendIfNotNull(httpParams, 'search', requestParam.search);
  httpParams = appendIfNotNull(httpParams, 'organizationId', requestParam.organizationId);

  return httpParams;
}

function appendSortIfNotNull(httpParams: HttpParams, param: string, data?: SortRequest): HttpParams {
  return data != null ? httpParams.append(param, `${data.field},${data.direction}`) : httpParams;
}

function appendIfNotNull(httpParams: HttpParams, param: string, data: any): HttpParams {
  return data != null ? httpParams.append(param, data) : httpParams;
}
