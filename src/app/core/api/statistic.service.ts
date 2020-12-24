import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  constructor(private readonly http: HttpClient) {
  }

  getUsersCount(): Observable<number> {
    return this.http.get<number>(`${environment.api}/statistic/users_count`);
  }

  getAdminsCount(): Observable<number> {
    return this.http.get<number>(`${environment.api}/statistic/users_admins_count`);
  }

  getProjectsCount(): Observable<number> {
    return this.http.get<number>(`${environment.api}/statistic/projects_count`);
  }

  getActiveProjectsCount(): Observable<number> {
    return this.http.get<number>(`${environment.api}/statistic/projects_active_count`);
  }

  getTasksCount(): Observable<number> {
    return this.http.get<number>(`${environment.api}/statistic/tasks_count`);
  }
}
