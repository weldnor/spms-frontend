import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {GlobalRole} from '../models/global-role.model';
import {NewGlobalRoleDto} from '../dto/global-role/new-global-role.dto';
import {UpdateGlobalRoleDto} from '../dto/global-role/update-global-role.dto';

@Injectable({
  providedIn: 'root'
})
export class GlobalRoleService {

  constructor(private readonly http: HttpClient) {
  }

  getAllGlobalRoles(): Observable<GlobalRole[]> {
    return this.http.get<GlobalRole[]>(`${environment.api}/global_roles`);
  }

  getGlobalRole(id: number): Observable<GlobalRole> {
    return this.http.get<GlobalRole>(`${environment.api}/global_roles/${id}`);
  }

  addGlobalRole(dto: NewGlobalRoleDto): Observable<GlobalRole> {
    return this.http.put<GlobalRole>(`${environment.api}/global_roles`, dto);
  }

  updateGlobalRole(dto: UpdateGlobalRoleDto, id: number): Observable<any> {
    return this.http.post<GlobalRole>(`${environment.api}/global_roles/${id}`, dto);
  }

  deleteGlobalRole(id: number): Observable<any> {
    return this.http.delete<GlobalRole>(`${environment.api}/global_roles/${id}`);
  }
}
