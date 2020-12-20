import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePage} from './pages/home/home.page';
import {RolesPage} from './pages/roles/roles.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', pathMatch: 'prefix'
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'roles',
    component: RolesPage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
