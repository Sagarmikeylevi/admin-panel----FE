import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeListRoutingModule } from './employe-list-routing.module';
import { EmployeListComponent } from './employe-list.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [EmployeListComponent],
  imports: [CommonModule, EmployeListRoutingModule, MatTableModule],
})
export class EmployeListModule {}
