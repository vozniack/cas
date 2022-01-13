import {HttpParams} from "@angular/common/http";
import {RequestParam} from "../model/request.interface";

export function buildHttpParams(requestParam: RequestParam): HttpParams {
  let httpParams: HttpParams = new HttpParams();

  if (requestParam.page != null) {
    httpParams = httpParams.append('page', requestParam.page)
  }

  if (requestParam.size != null) {
    httpParams = httpParams.append('size', requestParam.size)
  }

  if (requestParam.sort != null) {
    httpParams = httpParams.append('sort', `${requestParam.sort.field},${requestParam.sort.direction}`)
  }

  return httpParams;
}
