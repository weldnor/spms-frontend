import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {Project} from '../../../../core/models/project.model';
import {ProjectService} from '../../../../core/api/project.service';
import {NewProjectDto} from '../../../../core/dto/project/new-project.dto';
import {EditProjectDialog} from '../../components/dialogs/edit-project/edit-project.dialog';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.sass']
})
export class ProjectsPage implements OnInit {

  projects?: Project[] = [];
  displayedColumns = ['projectId', 'name', 'ownerId', 'description', 'actions'];

  form: FormGroup;

  constructor(
    private readonly projectService: ProjectService,
    private readonly formBuilder: FormBuilder,
    private readonly dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      ownerId: [null, [Validators.required]],
      description: [null, []],
    });
    this.update();
  }

  update(): void {
    this.projectService.getAllProjects().subscribe(value => {
      this.projects = value;
    });
  }

  onClickSaveButton(): void {
    const name: string = this.form.get('name').value;
    const ownerId: number = this.form.get('ownerId').value;
    const description: string = this.form.get('description').value;

    const dto: NewProjectDto = new NewProjectDto(name, ownerId, description);

    this.projectService.addProject(dto).subscribe(value => {
      this.update();
    });
  }

  onClickEditButton(id: number): void {
    this.dialog.open(EditProjectDialog, {data: id}).afterClosed().subscribe(() => {
      this.update();
    });
  }

  onClickDeleteButton(id: number): void {
    this.projectService.deleteProject(id).subscribe(value => {
      this.update();
    });
  }

}
