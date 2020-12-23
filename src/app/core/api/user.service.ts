import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {environment} from '../../../environments/environment';
import {UpdateUserDto} from '../dto/user/update-user.dto';
import {NewUserDto} from '../dto/user/new-user.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http: HttpClient) {
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.api}/users`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${environment.api}/users/${id}`);
  }

  registerUser(dto: NewUserDto): Observable<any> {
    return this.http.post<any>(`${environment.api}/public/register`, dto);
  }

  updateUser(dto: UpdateUserDto, userId: number): Observable<any> {
    return this.http.post<any>(`${environment.api}/users/${userId}`, dto);
  }

  deleteUser(userId: number): Observable<User | null> {
    return this.http.delete<any>(`${environment.api}/users/${userId}`);
  }
}
