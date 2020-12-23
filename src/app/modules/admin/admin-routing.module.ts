import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePage} from './pages/home/home.page';
import {RolesPage} from './pages/roles/roles.page';
import {UsersPage} from './pages/users/users.page';
import {ProjectsPage} from './pages/projects/projects.page';

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
  {
    path: 'users',
    component: UsersPage
  },
  {
    path: 'projects',
    component: ProjectsPage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
