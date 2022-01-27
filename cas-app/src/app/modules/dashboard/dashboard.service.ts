import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {DashboardStatistics} from "./dashboard.interface";
import {Observable} from "rxjs";

@Injectable()
export class DashboardService {

  statisticsBaseUrl = `${environment.coreUrl}/v1/statistics`;

  constructor(private httpClient: HttpClient) {
  }

  getDashboardStatistics(): Observable<DashboardStatistics> {
    return this.httpClient.get<DashboardStatistics>(`${this.statisticsBaseUrl}/dashboard`);
  }
}
