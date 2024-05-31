import { Component, Input } from '@angular/core';
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
  @Input() type: string = '';
  @Input() updatedEmployee: Employee = {
    id: '',
    name: '',
    position: '',
    salary: 0,
  };
  loading: boolean = false;

  constructor(
    private employeeService: EmployeService,
    private errorService: ErrorService
  ) {}

  onSubmit(form: NgForm) {
    this.loading = true;
    const employee: Employee = form.value;

    if (this.type === 'Add') {
      this.handleAddEmployee(employee, form);
    } else {
      this.handleUpdateEmployee(employee, form);
    }
  }

  private handleAddEmployee(employee: Employee, form: NgForm) {
    this.employeeService.addEmployee(employee).subscribe(
      () => this.onSuccess(form),
      () => this.onError(form, 'Error adding employee')
    );
  }

  private handleUpdateEmployee(employee: Employee, form: NgForm) {
    this.employeeService
      .updateEmployee(employee, this.updatedEmployee.id)
      .subscribe(
        () => this.onSuccess(form),
        () => this.onError(form, 'Error updating employee')
      );
  }

  private onSuccess(form: NgForm) {
    form.reset();
    this.loading = false;
  }

  private onError(form: NgForm, errorMessage: string) {
    form.reset();
    this.loading = false;
    this.errorService.setError(errorMessage);
  }
}
