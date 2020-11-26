import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './pages/home/home.page';
import { EditableUserViewerComponent } from './compontents/editable-user-viewer/editable-user-viewer.component';


@NgModule({
  declarations: [HomePage, EditableUserViewerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
