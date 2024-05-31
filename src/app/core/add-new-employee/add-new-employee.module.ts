import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddNewEmployeeRoutingModule } from './add-new-employee-routing.module';
import { AddNewEmployeeComponent } from './add-new-employee.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AddNewEmployeeComponent],
  imports: [CommonModule, AddNewEmployeeRoutingModule, SharedModule],
})
export class AddNewEmployeeModule {}
