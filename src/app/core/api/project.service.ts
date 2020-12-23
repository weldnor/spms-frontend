import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Project} from '../models/project.model';
import {NewProjectDto} from '../dto/project/new-project.dto';
import {UpdateProjectDto} from '../dto/project/update-project.dto';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private readonly http: HttpClient) {
  }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${environment.api}/projects`);
  }

  getProject(id: number): Observable<Project> {
    return this.http.get<Project>(`${environment.api}/projects/${id}`);
  }

  addProject(dto: NewProjectDto): Observable<Project> {
    return this.http.put<Project>(`${environment.api}/projects`, dto);
  }

  updateProject(dto: UpdateProjectDto, id: number): Observable<any> {
    return this.http.post<Project>(`${environment.api}/projects/${id}`, dto);
  }

  deleteProject(projectId: number): Observable<any> {
    return this.http.delete<any>(`${environment.api}/projects/${projectId}`);
  }
}
