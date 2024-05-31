import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeListComponent } from './core/employe-list/employe-list.component';
import { AddNewEmployeeComponent } from './core/add-new-employee/add-new-employee.component';
import { UpdateEmployeeComponent } from './core/update-employee/update-employee.component';

const routes: Routes = [
  { path: '', component: EmployeListComponent },
  { path: 'add', component: AddNewEmployeeComponent },
  { path: 'update', component: UpdateEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
