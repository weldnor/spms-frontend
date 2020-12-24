import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Task} from '../models/task.model';
import {NewTaskDto} from '../dto/task/new-task.dto';
import {UpdateTaskDto} from '../dto/task/update-task.dto';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private readonly http: HttpClient) {
  }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.api}/tasks`);
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<any>(`${environment.api}/tasks/${id}`);
  }

  addTask(dto: NewTaskDto): Observable<any> {
    return this.http.put<any>(`${environment.api}/tasks`, dto);
  }

  updateTask(dto: UpdateTaskDto, taskid: number): Observable<any> {
    return this.http.post<any>(`${environment.api}/tasks/${taskid}`, dto);
  }

  deleteTask(taskId: number): Observable<any> {
    return this.http.delete<any>(`${environment.api}/tasks/${taskId}`);
  }
}
