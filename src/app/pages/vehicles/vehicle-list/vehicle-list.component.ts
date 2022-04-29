import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {NbDialogService} from '@nebular/theme';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../app-store/app-state';
import {loadVehicleRequest} from '../vehicles.actions';
import {selectAllVehicles} from '../vehicles.selectors';
import {VehicleAddComponent} from '../vehicle-add/vehicle-add.component';
import {VehicleEditComponent} from '../vehicle-edit/vehicle-edit.component';

@Component({
  selector: 'ngx-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})
export class VehicleListComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();
  settings = {
    actions: false,
    columns: {
      department: {
        title: 'Department',
        type: 'string',
      },
      registrationNumber: {
        title: 'Reg. Number',
        type: 'string',
      },
      vin: {
        title: 'VIN',
        type: 'string',
      },
      make: {
        title: 'Make',
        type: 'string',
      },
      model: {
        title: 'Model',
        type: 'string',
      },
      chassis: {
        title: 'Chassis',
        type: 'string',
      },
      color: {
        title: 'Color',
        type: 'string',
      },
      yearOfManufacturing: {
        title: 'Year',
        type: 'string',
      },
      additionalInformation: {
        title: 'Comment',
        type: 'string',
      },
      recordStatus: {
        title: 'Status',
        type: 'string',
        filter: {
          type: 'list',
          config: {
            selectText: 'Select...',
            list: [
              {value: 'ACTIVE', title: 'ACTIVE'},
              {value: 'DEACTIVATED', title: 'DEACTIVATED'},
            ],
          },
        },
      },
      dateCreated: {
        title: 'Date',
        type: 'date',
        filter: {
          type: 'datepicker',
          config: {
            datepicker: {
              selectMode: 'range',
              placeholder: 'Pick date...',
            },
          },
        },
        editor: {
          type: 'datepicker',
        },
      },
    },
  };

  constructor(private dialogService: NbDialogService, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadVehicleRequest());

    this.store.pipe(select(selectAllVehicles))
      .subscribe({
        next: (data) => {
          this.source.load(data);
        },
      });
  }

  add() {
    this.dialogService.open(VehicleAddComponent);
  }

  onRowSelect($event: any) {
    this.dialogService.open(VehicleEditComponent, {
      context: {
        vehicle: $event.data,
      },
    });
  }
}
