import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginPage} from './pages/login/login.page';
import {RegisterPage} from './pages/register/register.page';


@NgModule({
  declarations: [LoginPage, RegisterPage],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule {
}
