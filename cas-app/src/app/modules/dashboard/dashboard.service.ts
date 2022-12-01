import {Injectable} from "@angular/core";
import {DashboardStatistics} from "./dashboard.interface";

@Injectable()
export class DashboardService {

  getDashboardStatistics(): DashboardStatistics {
    return {
      organizationsAmount: 16,
      usersAmount: 32,
      rolesAmount: 64,
      privilegesAmount: 128
    }
  }
}
