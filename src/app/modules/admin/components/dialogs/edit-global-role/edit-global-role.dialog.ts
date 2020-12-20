import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {GlobalRoleService} from '../../../../../core/api/global-role.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

    this.globalRoleService.getById(this.globalRoleId).subscribe(value => {
      this.form.get('name').setValue(value.name);
    });
  }


  onClickSaveButton(): void {
    const name: string = this.form.get('name').value;
    this.globalRoleService.update(name, this.globalRoleId).subscribe(value => {
      this.dialogRef.close();
    });
  }
}
