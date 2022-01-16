import {HttpParams} from "@angular/common/http";
import {RequestParam} from "../model/request.interface";

export function buildHttpParams(requestParam: RequestParam): HttpParams {
  let httpParams: HttpParams = new HttpParams();

  httpParams = appendIfNotNull(httpParams, 'page', requestParam.page);
  httpParams = appendIfNotNull(httpParams, 'size', requestParam.size);
  httpParams = appendIfNotNull(httpParams, 'sort', requestParam.sort);
  httpParams = appendIfNotNull(httpParams, 'search', requestParam.search);

  return httpParams;
}

function appendIfNotNull(httpParams: HttpParams, param: string, data: any): HttpParams {
  return data != null ? httpParams.append(param, data) : httpParams;
}
