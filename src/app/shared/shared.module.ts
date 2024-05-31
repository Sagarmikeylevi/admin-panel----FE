import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [EmployeeFormComponent, ErrorComponent],
  imports: [CommonModule, MatInputModule],
  exports: [EmployeeFormComponent, FormsModule, MatInputModule, ErrorComponent],
})
export class SharedModule {}
