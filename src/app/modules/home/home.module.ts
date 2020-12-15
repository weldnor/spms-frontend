import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './pages/home/home.page';
import {EditableUserListComponent} from './compontents/editable-user-list/editable-user-list.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { GlobalRoleListComponent } from './compontents/global-role-list/global-role-list.component';


@NgModule({
  declarations: [HomePage, EditableUserListComponent, GlobalRoleListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatListModule,
    MatButtonModule
  ]
})
export class HomeModule { }
