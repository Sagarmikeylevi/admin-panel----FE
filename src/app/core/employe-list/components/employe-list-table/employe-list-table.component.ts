import { Component, OnInit } from '@angular/core';

import { Employee } from 'src/app/models/employee';
import { EmployeService } from 'src/app/services/employe.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-employe-list-table',
  templateUrl: './employe-list-table.component.html',
  styleUrls: ['./employe-list-table.component.css'],
})
export class EmployeListTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'position', 'salary'];
  loading: boolean = false;
  loadingMessage: string = 'Loading employees table...';

  constructor(
    private employeService: EmployeService,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.employeService.getAllEmployees().subscribe(
      (res) => {
        this.loading = false;
        this.employeService.setEmployees(res);
      },
      (error) => {
        this.loading = false;
        this.errorService.setError('Error getting employees');
      }
    );
  }

  get dataSource(): Employee[] {
    return this.employeService.getEmployees();
  }
}
