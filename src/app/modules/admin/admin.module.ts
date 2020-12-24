import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {HomePage} from './pages/home/home.page';
import {RolesPage} from './pages/roles/roles.page';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {EditGlobalRoleDialog} from './components/dialogs/edit-global-role/edit-global-role.dialog';
import {MatDialogModule} from '@angular/material/dialog';
import {UsersPage} from './pages/users/users.page';
import {EditUserDialog} from './components/dialogs/edit-user/edit-user.dialog';
import {ProjectsPage} from './pages/projects/projects.page';
import {EditProjectDialog} from './components/dialogs/edit-project/edit-project.dialog';
import {TasksPage} from './pages/tasks/tasks.page';
import {EditTaskDialog} from './components/dialogs/edit-task/edit-task.dialog';
import { StatisticPage } from './pages/statistic/statistic.page';


@NgModule({
  declarations: [
    HomePage,
    RolesPage,
    EditGlobalRoleDialog,
    UsersPage,
    EditUserDialog,
    ProjectsPage,
    EditProjectDialog,
    TasksPage,
    EditTaskDialog,
    StatisticPage,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule, ReactiveFormsModule, MatButtonModule, MatDialogModule
  ]
})
export class AdminModule {
}
