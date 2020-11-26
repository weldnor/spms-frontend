import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../core/api/user.service';
import {User} from '../../../../core/models/user.model';

@Component({
  selector: 'app-editable-user-viewer',
  templateUrl: './editable-user-viewer.component.html',
  styleUrls: ['./editable-user-viewer.component.css']
})
export class EditableUserViewerComponent implements OnInit {

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
}
