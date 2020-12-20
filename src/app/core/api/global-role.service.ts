import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {GlobalRole} from '../models/global-role.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalRoleService {

  constructor(private readonly http: HttpClient) {
  }

  getAll(): Observable<GlobalRole[]> {
    return this.http.get<GlobalRole[]>(`${environment.api}/global_roles`);
  }

  getById(id: number): Observable<GlobalRole> {
    return this.http.get<GlobalRole>(`${environment.api}/global_roles/${id}`);
  }

  add(name: string): Observable<GlobalRole> {
    const data = {
      name
    };
    return this.http.put<GlobalRole>(`${environment.api}/global_roles`, data);
  }

  update(name: string, id: number): Observable<any> {
    const data = {
      name
    };
    return this.http.post<GlobalRole>(`${environment.api}/global_roles/${id}`, data);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete<GlobalRole>(`${environment.api}/global_roles/${id}`);
  }
}
