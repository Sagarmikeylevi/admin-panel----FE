import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { EmployeService } from 'src/app/services/employe.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent {
  loading: boolean = false;
  constructor(
    private employeeService: EmployeService,
    private errorService: ErrorService
  ) {}

  onSubmit(f: NgForm) {
    this.loading = true;
    const body: Employee = f.form.value;
    this.employeeService.addEmployee(body).subscribe(
      (res) => {
        f.reset();
        this.loading = false;
      },
      (error) => {
        f.reset();
        this.loading = false;
        this.errorService.setError('Error adding employee');
      }
    );
  }
}
