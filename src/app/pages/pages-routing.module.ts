import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'users',
      loadChildren: () => import('./users/users.module')
        .then(m => m.UsersModule),
    },
    {
      path: 'departments',
      loadChildren: () => import('./departments/departments.module')
        .then(m => m.DepartmentsModule),
    },
    {
      path: 'head-of-departments',
      loadChildren: () => import('./head-of-departments/head-of-departments.module')
        .then(m => m.HeadOfDepartmentsModule),
    },
    {
      path: 'motor-service-categories',
      loadChildren: () => import('./motor-service-categories/motor-service-categories.module')
        .then(m => m.MotorServiceCategoriesModule),
    },
    {
      path: 'users',
      loadChildren: () => import('./users/users.module')
        .then(m => m.UsersModule),
    },
    {
      path: 'vehicles',
      loadChildren: () => import('./vehicles/vehicles.module')
        .then(m => m.VehiclesModule),
    },
    {
      path: 'products',
      loadChildren: () => import('./products/products.module')
        .then(m => m.ProductsModule),
    },
    {
      path: 'bookings',
      loadChildren: () => import('./bookings/bookings.module')
        .then(m => m.BookingsModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
