import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {Task} from '../../../../core/models/task.model';
import {TaskService} from '../../../../core/api/task.service';
import {NewTaskDto} from '../../../../core/dto/task/new-task.dto';
import {EditTaskDialog} from '../../components/dialogs/edit-task/edit-task.dialog';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.sass']
})
export class TasksPage implements OnInit {

  tasks?: Task[] = [];
  displayedColumns = ['taskId', 'projectId', 'creatorId', 'name', 'description', 'statusId', 'actions'];

  form: FormGroup;

  constructor(
    private readonly taskService: TaskService,
    private readonly formBuilder: FormBuilder,
    private readonly dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      projectId: [null, [Validators.required]],
      creatorId: [null, [Validators.required]],
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      statusId: [null, [Validators.required]],
    });
    this.update();
  }

  update(): void {
    this.taskService.getAllTasks().subscribe(value => {
      this.tasks = value;
    });
  }

  onClickSaveButton(): void {
    const projectId: number = this.form.get('projectId').value;
    const creatorId: number = this.form.get('creatorId').value;
    const name: string = this.form.get('name').value;
    const description: string = this.form.get('description').value;
    const statusId: number = this.form.get('statusId').value;

    const dto: NewTaskDto = new NewTaskDto(projectId, creatorId, name, description, statusId);

    this.taskService.addTask(dto).subscribe(value => {
      this.update();
    });
  }

  onClickEditButton(id: number): void {
    this.dialog.open(EditTaskDialog, {data: id}).afterClosed().subscribe(() => {
      this.update();
    });
  }

  onClickDeleteButton(id: number): void {
    this.taskService.deleteTask(id).subscribe(value => {
      this.update();
    });
  }

}
