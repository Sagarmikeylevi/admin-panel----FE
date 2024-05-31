import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [EmployeeFormComponent],
  imports: [CommonModule, MatInputModule],
  exports: [EmployeeFormComponent, MatInputModule],
})
export class SharedModule {}
