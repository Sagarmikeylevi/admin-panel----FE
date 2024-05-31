import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [EmployeeFormComponent, ErrorComponent, LoadingComponent],
  imports: [CommonModule, MatInputModule, FormsModule],
  exports: [
    EmployeeFormComponent,
    FormsModule,
    MatInputModule,
    ErrorComponent,
    LoadingComponent,
  ],
})
export class SharedModule {}
