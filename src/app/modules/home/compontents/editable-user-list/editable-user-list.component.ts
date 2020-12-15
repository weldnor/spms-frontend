import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../core/api/user.service';
import {User} from '../../../../core/models/user.model';

@Component({
  selector: 'app-editable-user-list',
  templateUrl: './editable-user-list.component.html',
  styleUrls: ['./editable-user-list.component.sass']
})
export class EditableUserListComponent implements OnInit {

  constructor(private readonly userService: UserService) {
  }

  users?: User[] = null;

  ngOnInit(): void {
    this.update();
  }

  update(): void {
    this.userService.getAllUsers().subscribe(value => {
      this.users = value;
    });
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(() => {
      this.update();
    });
  }

  handleInfo(user: User): void {

  }

  handleDelete($event: MouseEvent, user: User): void {

  }

  handleCreate($event: MouseEvent): void {

  }
}
