import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {GlobalRoleService} from '../../../../../core/api/global-role.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UpdateGlobalRoleDto} from '../../../../../core/dto/global-role/update-global-role.dto';

@Component({
  selector: 'app-edit-global-role',
  templateUrl: './edit-global-role.dialog.html',
  styleUrls: ['./edit-global-role.dialog.css']
})
export class EditGlobalRoleDialog implements OnInit {

  private globalRoleId?: number;
  form: FormGroup;

  constructor(
    private globalRoleService: GlobalRoleService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private readonly data,
    private readonly dialogRef: MatDialogRef<EditGlobalRoleDialog, undefined>,
  ) {
  }

  ngOnInit(): void {
    this.globalRoleId = this.data;

    this.form = this.formBuilder.group({
      name: [null, [Validators.required]]
    });

    this.globalRoleService.getGlobalRole(this.globalRoleId).subscribe(value => {
      this.form.get('name').setValue(value.name);
    });
  }


  onClickSaveButton(): void {
    const name: string = this.form.get('name').value;

    const dto: UpdateGlobalRoleDto = new UpdateGlobalRoleDto(name);

    this.globalRoleService.updateGlobalRole(dto, this.globalRoleId).subscribe(value => {
      this.dialogRef.close();
    });
  }
}
