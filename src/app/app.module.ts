import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { EmployeListComponent } from './core/employe-list/employe-list.component';
import { AddNewEmployeeComponent } from './core/add-new-employee/add-new-employee.component';
import { MatInputModule } from '@angular/material/input';
import { EmployeeFormComponent } from './shared/employee-form/employee-form.component';
import { UpdateEmployeeComponent } from './core/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './core/delete-employee/delete-employee.component';
import { AdmindashboardComponent } from './core/admindashboard/admindashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EmployeListComponent,
    AddNewEmployeeComponent,
    EmployeeFormComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
    AdmindashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
