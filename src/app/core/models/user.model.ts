import {UserRole} from './user-role.model';

export class User {
  userId: number;
  username: string;
  firstName: string;
  secondName: string;
  patronymic?: string;
  password: string;
  email: string;
  role: UserRole;
}
