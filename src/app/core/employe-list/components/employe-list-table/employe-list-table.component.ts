import { Component, OnInit } from '@angular/core';

import { Employee } from 'src/app/models/employee';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-employe-list-table',
  templateUrl: './employe-list-table.component.html',
  styleUrls: ['./employe-list-table.component.css'],
})
export class EmployeListTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'position', 'salary'];

  constructor(private employeService: EmployeService) {}

  ngOnInit(): void {
    this.employeService.getAllEmployees().subscribe(
      (res) => {
        this.employeService.setEmployees(res);
      },
      (error) => console.log(error)
    );
  }

  get dataSource(): Employee[] {
    return this.employeService.getEmployees();
  }
}
