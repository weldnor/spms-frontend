export class UpdateUserDto {
  firstName: string;
  secondName: string;
  patronymic?: string;
  password: string;
  email: string;

  constructor(firstName: string, secondName: string, patronymic: string, password: string, email: string) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.patronymic = patronymic;
    this.password = password;
    this.email = email;
  }
}
