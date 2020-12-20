import {Component, OnInit} from '@angular/core';
import {GlobalRole} from '../../../../core/models/global-role.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GlobalRoleService} from '../../../../core/api/global-role.service';
import {MatDialog} from '@angular/material/dialog';
import {EditGlobalRoleDialog} from '../../components/dialogs/edit-global-role/edit-global-role.dialog';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.page.html',
  styleUrls: ['./roles.page.sass']
})
export class RolesPage implements OnInit {

  roles?: GlobalRole[] = [{name: 'USER', globalRoleId: 1}];
  displayedColumns = ['globalRoleId', 'name', 'actions'];

  form: FormGroup;

  constructor(
    private globalRoleService: GlobalRoleService,
    private formBuilder: FormBuilder,
    private readonly dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]]
    });

    this.update();
  }

  update(): void {
    this.globalRoleService.getAll().subscribe(value => {
      this.roles = value;
    });
  }

  onClickSaveButton(): void {
    const name: string = this.form.get('name').value;

    this.globalRoleService.add(name).subscribe(value => {
      this.update();
    });
  }

  onClickEditButton(id: number): void {
    this.dialog.open(EditGlobalRoleDialog, {data: id}).afterClosed().subscribe(() => {
      this.update();
    });
  }

  onClickDeleteButton(id: number): void {
    this.globalRoleService.deleteById(id).subscribe(value => {
      this.update();
    });
  }
}
