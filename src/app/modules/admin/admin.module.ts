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
import { EditGlobalRoleDialog } from './components/dialogs/edit-global-role/edit-global-role.dialog';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    HomePage,
    RolesPage,
    EditGlobalRoleDialog,
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
