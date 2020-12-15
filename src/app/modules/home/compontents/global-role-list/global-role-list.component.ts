import {Component, OnInit} from '@angular/core';
import {User} from '../../../../core/models/user.model';
import {GlobalRole} from '../../../../core/models/global-role.model';
import {GlobalRoleService} from '../../../../core/api/global-role.service';

@Component({
  selector: 'app-global-role-list',
  templateUrl: './global-role-list.component.html',
  styleUrls: ['./global-role-list.component.css']
})
export class GlobalRoleListComponent implements OnInit {
  roles?: GlobalRole[] = null;

  constructor(private readonly globalRoleService: GlobalRoleService) {
  }

  ngOnInit(): void {
    this.update();
  }

  update(): void {
    this.globalRoleService.getAllRoles().subscribe(value => {
      this.roles = value;
    });
  }

  handleInfo(role: any): void {

  }
}
