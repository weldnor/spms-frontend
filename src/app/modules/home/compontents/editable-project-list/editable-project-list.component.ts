import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../core/api/user.service';
import {User} from '../../../../core/models/user.model';
import {Project} from '../../../../core/models/project.model';
import {ProjectService} from '../../../../core/api/project.service';

@Component({
  selector: 'app-editable-project-list',
  templateUrl: './editable-project-list.component.html',
  styleUrls: ['./editable-project-list.component.sass']
})
export class EditableProjectListComponent implements OnInit {

  constructor(private readonly projectService: ProjectService) {
  }

  projects?: Project[] = null;

  ngOnInit(): void {
    this.update();
  }

  update(): void {
    this.projectService.getAllProjects().subscribe(value => {
      this.projects = value;
    });
  }

  handleInfo(project: Project): void {

  }

  handleDelete(project: Project): void {
    this.projectService.deleteProject(project.projectId).subscribe(value => {
      this.update();
    });
  }

  handleCreate(): void {

  }
}
