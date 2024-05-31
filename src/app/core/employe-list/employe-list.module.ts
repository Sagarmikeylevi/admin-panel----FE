import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeListRoutingModule } from './employe-list-routing.module';
import { EmployeListComponent } from './employe-list.component';
import { MatTableModule } from '@angular/material/table';
import { EmployeListHeaderComponent } from './components/employe-list-header/employe-list-header.component';
import { EmployeListTableComponent } from './components/employe-list-table/employe-list-table.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    EmployeListComponent,
    EmployeListHeaderComponent,
    EmployeListTableComponent,
  ],
  imports: [
    CommonModule,
    EmployeListRoutingModule,
    MatTableModule,
    SharedModule,
  ],
})
export class EmployeListModule {}
