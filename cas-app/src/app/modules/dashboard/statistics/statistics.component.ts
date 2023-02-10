import {Component} from '@angular/core';
import {DashboardStatistics} from '../dashboard.interface';
import {DashboardService} from '../dashboard.service';

@Component({
  selector: 'cas-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {

  statistics?: DashboardStatistics;

  constructor(private dashboardService: DashboardService) {
    this.statistics = this.dashboardService.getDashboardStatistics();
  }
}
