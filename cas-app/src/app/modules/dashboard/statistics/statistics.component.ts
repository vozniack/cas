import {Component} from '@angular/core';
import {DashboardService} from "../dashboard.service";
import {DashboardStatistics} from "../dashboard.interface";
import {fadeInAnimation} from "../../../shared/animations/fade-in-animation";

@Component({
  selector: 'cas-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  animations: [fadeInAnimation]
})
export class StatisticsComponent {

  statistics?: DashboardStatistics;

  constructor(private dashboardService: DashboardService) {
    this.statistics = this.dashboardService.getDashboardStatistics();
  }
}
