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

  getAllRoles(): Observable<GlobalRole[]> {
    return this.http.get<GlobalRole[]>(`${environment.api}/global_roles`);
  }
}
