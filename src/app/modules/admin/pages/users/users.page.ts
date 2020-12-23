import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {User} from '../../../../core/models/user.model';
import {UserService} from '../../../../core/api/user.service';
import {EditUserDialog} from '../../components/dialogs/edit-user/edit-user.dialog';
import {NewUserDto} from '../../../../core/dto/user/new-user.dto';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.sass']
})
export class UsersPage implements OnInit {

  users?: User[] = [];
  displayedColumns = ['userId', 'username', 'firstName', 'secondName', 'patronymic', 'email', 'actions'];

  form: FormGroup;

  constructor(
    private readonly userService: UserService,
    private readonly formBuilder: FormBuilder,
    private readonly dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      secondName: [null, [Validators.required]],
      patronymic: [null, []],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
    this.update();
  }

  update(): void {
    this.userService.getAllUsers().subscribe(value => {
      this.users = value;
    });
  }

  onClickSaveButton(): void {
    const username: string = this.form.get('username').value;
    const firstName: string = this.form.get('firstName').value;
    const secondName: string = this.form.get('secondName').value;
    const patronymic: string = this.form.get('patronymic').value; // fixme
    const email: string = this.form.get('email').value;
    const password: string = this.form.get('password').value;

    const dto: NewUserDto = new NewUserDto(username, firstName, secondName, patronymic, password, email);

    this.userService.registerUser(dto).subscribe(value => {
      this.update();
    });
  }

  onClickEditButton(id: number): void {
    this.dialog.open(EditUserDialog, {data: id}).afterClosed().subscribe(() => {
      this.update();
    });
  }

  onClickDeleteButton(id: number): void {
    this.userService.deleteUser(id).subscribe(value => {
      this.update();
    });
  }
}
