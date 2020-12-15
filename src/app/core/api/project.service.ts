import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Project} from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private readonly http: HttpClient) {
  }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${environment.api}/projects`);
  }

  // FIXME
  deleteProject(projectId: number): Observable<any> {
    return this.http.delete<any>(`${environment.api}/projects/${projectId}`);
  }
}
