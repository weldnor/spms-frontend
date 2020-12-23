import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ProjectService} from '../../../../../core/api/project.service';
import {UpdateProjectDto} from '../../../../../core/dto/project/update-project.dto';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.dialog.html',
  styleUrls: ['./edit-project.dialog.sass']
})
export class EditProjectDialog implements OnInit {

  private projectId?: number;
  form: FormGroup;

  constructor(
    private projectService: ProjectService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private readonly data,
    private readonly dialogRef: MatDialogRef<EditProjectDialog, undefined>,
  ) {
  }

  ngOnInit(): void {
    this.projectId = this.data;

    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      ownerId: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });

    this.projectService.getProject(this.projectId).subscribe(value => {
      this.form.get('name').setValue(value.name);
      this.form.get('ownerId').setValue(value.ownerId);
      this.form.get('description').setValue(value.description);
    });
  }


  onClickSaveButton(): void {
    const name: string = this.form.get('name').value;
    const ownerId: number = this.form.get('ownerId').value;
    const description: string = this.form.get('description').value;

    const dto: UpdateProjectDto = new UpdateProjectDto(name, ownerId, description);

    this.projectService.updateProject(dto, this.projectId).subscribe(value => {
      this.dialogRef.close();
    });
  }
}
