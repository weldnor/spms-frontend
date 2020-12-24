import {Component, OnInit} from '@angular/core';
import {StatisticService} from '../../../../core/api/statistic.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.page.html',
  styleUrls: ['./statistic.page.sass']
})
export class StatisticPage implements OnInit {

  usersCount?: number;
  adminsCount?: number;
  projectsCount?: number;
  tasksCount?: number;
  activeProjectsCount?: number;

  constructor(
    private readonly statisticService: StatisticService,
  ) {
  }

  ngOnInit(): void {
    this.update();
  }

  update(): void {
    this.statisticService.getUsersCount().subscribe(value => {
      this.usersCount = value;
    });

    this.statisticService.getAdminsCount().subscribe(value => {
      this.adminsCount = value;
    });

    this.statisticService.getProjectsCount().subscribe(value => {
      this.projectsCount = value;
    });

    this.statisticService.getActiveProjectsCount().subscribe(value => {
      this.activeProjectsCount = value;
    });

    this.statisticService.getTasksCount().subscribe(value => {
      this.tasksCount = value;
    });
  }
}
