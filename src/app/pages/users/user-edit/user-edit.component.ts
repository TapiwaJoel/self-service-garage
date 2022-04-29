import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../app-store/app-state';
import {userRoles} from '../../utils/user-roles';
import {selectUserLoading} from '../users.selectors';
import {createRequest} from '../users.actions';
import {loadDepartmentRequest} from '../../departments/departments.actions';
import {selectAllDepartments} from '../../departments/departments.selectors';
import {createHeadOfDepartmentRequest} from '../../head-of-departments/head-of-departments.actions';
import {User} from '../users.entity';

@Component({
  selector: 'ngx-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  @Input() user: User;
  editUserForm: FormGroup;
  addHODForm: FormGroup;
  name;
  loader$: Observable<boolean>;
  roles: { val: string, key: string }[];
  checked = false;
  departments: any[];

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {

    userRoles.shift();
    userRoles.shift();


    this.roles = userRoles;
    this.loader$ = this.store.pipe(select(selectUserLoading));

    this.store.dispatch(loadDepartmentRequest());

    this.editUserForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      role: new FormControl('', Validators.required),
    });

    this.addHODForm = new FormGroup({
      departmentId: new FormControl('', Validators.required),
    });

    this.store.pipe(select(selectAllDepartments))
      .subscribe({
        next: (data) => {
          this.departments = data;
        },
      });
  }

  onSubmit() {
    this.store.dispatch(createRequest({user: {...this.editUserForm.value}}));
  }

  onAddHODSubmit() {
    this.store.dispatch(createHeadOfDepartmentRequest({
      headOfDepartment: {
        ...this.addHODForm.value,
        userId: this.user.id,
      },
    }));
  }

  onHasLicenceChange(checked: boolean) {
    this.checked = checked;
  }
}
