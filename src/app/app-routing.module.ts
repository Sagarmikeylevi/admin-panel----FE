import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeListComponent } from './core/employe-list/employe-list.component';
import { AddNewEmployeeComponent } from './core/add-new-employee/add-new-employee.component';

const routes: Routes = [
  { path: '', component: EmployeListComponent },
  { path: 'addForm', component: AddNewEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
