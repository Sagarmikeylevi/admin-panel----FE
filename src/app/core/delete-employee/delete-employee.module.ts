import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteEmployeeRoutingModule } from './delete-employee-routing.module';
import { DeleteEmployeeComponent } from './delete-employee.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DeleteEmployeeComponent],
  imports: [CommonModule, DeleteEmployeeRoutingModule, SharedModule],
})
export class DeleteEmployeeModule {}
