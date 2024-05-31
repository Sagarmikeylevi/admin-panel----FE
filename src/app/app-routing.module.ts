import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeListComponent } from './core/employe-list/employe-list.component';
import { AddNewEmployeeComponent } from './core/add-new-employee/add-new-employee.component';
import { UpdateEmployeeComponent } from './core/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './core/delete-employee/delete-employee.component';
import { AdmindashboardComponent } from './core/admindashboard/admindashboard.component';

const routes: Routes = [
  { path: '', component: AdmindashboardComponent },
  {
    path: 'login',
    loadChildren: () =>
      import('./core/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'employee-list',
    loadChildren: () =>
      import('./core/employe-list/employe-list.module').then(
        (m) => m.EmployeListModule
      ),
  },
  {
    path: 'add',
    loadChildren: () =>
      import('./core/add-new-employee/add-new-employee.module').then(
        (m) => m.AddNewEmployeeModule
      ),
  },
  {
    path: 'update',
    loadChildren: () =>
      import('./core/update-employee/update-employee.module').then(
        (m) => m.UpdateEmployeeModule
      ),
  },
  {
    path: 'delete',
    loadChildren: () =>
      import('./core/delete-employee/delete-employee.module').then(
        (m) => m.DeleteEmployeeModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
