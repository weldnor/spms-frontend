export class NewUserDto {
  username: string;
  firstName: string;
  secondName: string;
  patronymic?: string;
  password: string;
  email: string;

  constructor(username: string, firstName: string, secondName: string, patronymic: string, password: string, email: string) {
    this.username = username;
    this.firstName = firstName;
    this.secondName = secondName;
    this.patronymic = patronymic;
    this.password = password;
    this.email = email;
  }
}
