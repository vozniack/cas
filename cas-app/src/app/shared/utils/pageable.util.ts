import {PageRequest} from "../model/pageable.interface";
import {HttpParams} from "@angular/common/http";

export function buildHttpParams(pageRequest: PageRequest): HttpParams {
  let httpParams: HttpParams = new HttpParams();

  if (pageRequest.page != null) {
    httpParams = httpParams.append('page', pageRequest.page)
  }

  if (pageRequest.size != null) {
    httpParams = httpParams.append('size', pageRequest.size)
  }

  return httpParams;
}
