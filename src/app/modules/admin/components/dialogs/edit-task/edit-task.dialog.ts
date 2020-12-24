import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TaskService} from '../../../../../core/api/task.service';
import {UpdateTaskDto} from '../../../../../core/dto/task/update-task.dto';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.dialog.html',
  styleUrls: ['./edit-task.dialog.sass']
})
export class EditTaskDialog implements OnInit {

  private taskId?: number;
  form: FormGroup;

  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private readonly data,
    private readonly dialogRef: MatDialogRef<EditTaskDialog, undefined>,
  ) {
  }

  ngOnInit(): void {
    this.taskId = this.data;

    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      statusId: [null, [Validators.required]]
    });

    this.taskService.getTask(this.taskId).subscribe(value => {
      this.form.get('name').setValue(value.name);
      this.form.get('description').setValue(value.description);
      this.form.get('statusId').setValue(value.statusId);
    });
  }


  onClickSaveButton(): void {
    const name: string = this.form.get('name').value;
    const description: string = this.form.get('description').value;
    const statusId: number = this.form.get('statusId').value;

    const dto: UpdateTaskDto = new UpdateTaskDto(name, description, statusId);

    this.taskService.updateTask(dto, this.taskId).subscribe(value => {
      this.dialogRef.close();
    });
  }
}
