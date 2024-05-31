import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent {
  type: string = 'Update';
  searchQuery: string = '';
  updatedEmployee: Employee | null = null;
  constructor(private employeeService: EmployeService) {}

  onSearch() {
    this.updatedEmployee = this.employeeService.getEmployeeById(
      this.searchQuery
    );
  }
}
