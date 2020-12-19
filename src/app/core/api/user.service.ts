import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http: HttpClient) {
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.api}/users`);
  }


  register(
    username: string,
    firstName: string,
    secondName: number,
    patronymic: string,
    password: string,
    email: string
  ): Observable<User | null> {
    const data = {
      username,
      firstName,
      secondName,
      patronymic,
      password,
      email
    };
    return this.http.post<User | null>(`${environment.api}/public/register`, data);
  }

  deleteUser(userId: number): Observable<User | null> {
    return this.http.delete<User | null>(`${environment.api}/users/${userId}`);
  }
}
