import { Component } from '@angular/core';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css'],
})
export class DeleteEmployeeComponent {
  employeeId: string = '';

  constructor(private employeeService: EmployeService) {}

  onDelete() {
    this.employeeService.deleteEmployee(this.employeeId).subscribe(
      (res) => console.log(res),
      (error) => console.log(error)
    );
  }
}
