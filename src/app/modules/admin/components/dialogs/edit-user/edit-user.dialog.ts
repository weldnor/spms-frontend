import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserService} from '../../../../../core/api/user.service';
import {UpdateUserDto} from '../../../../../core/dto/update-user.dto';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.dialog.html',
  styleUrls: ['./edit-user.dialog.sass']
})
export class EditUserDialog implements OnInit {

  private userId?: number;
  form: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private readonly data,
    private readonly dialogRef: MatDialogRef<EditUserDialog, undefined>,
  ) {
  }

  ngOnInit(): void {
    this.userId = this.data;

    this.form = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      secondName: [null, [Validators.required]],
      patronymic: [null, []],
      email: [null, [Validators.required]],
      password: [null, []],
    });

    this.userService.getUserById(this.userId).subscribe(value => {
      this.form.get('firstName').setValue(value.firstName);
      this.form.get('secondName').setValue(value.secondName);
      this.form.get('patronymic').setValue(value.patronymic);
      this.form.get('email').setValue(value.email);
    });
  }


  onClickSaveButton(): void {
    const firstName: string = this.form.get('firstName').value;
    const secondName: string = this.form.get('secondName').value;
    const patronymic: string = this.form.get('patronymic').value;
    const email: string = this.form.get('email').value;
    const password: string = this.form.get('password').value;

    const dto: UpdateUserDto = new UpdateUserDto(firstName, secondName, patronymic, password, email);

    this.userService.updateUser(dto, this.userId).subscribe(value => {
      this.dialogRef.close();
    });
  }
}
