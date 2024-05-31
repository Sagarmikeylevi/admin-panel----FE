import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.contants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeService {
  private employees: Employee[] = [];
  private filteredEmployee: Employee[] = [];

  constructor(private http: HttpClient) {}

  searchEmployees(query: string) {
    if (!query) {
      this.filteredEmployee = this.employees;
    } else {
      this.filteredEmployee = this.employees.filter(
        (employee) =>
          employee.id.includes(query.toLowerCase()) ||
          employee.name.toLowerCase().includes(query.toLowerCase()) ||
          employee.position.toLowerCase().includes(query.toLowerCase())
      );
    }
  }

  setEmployees(employees: Employee[]): void {
    this.employees = employees;
    this.filteredEmployee = employees;
  }

  getEmployees(): Employee[] {
    return this.filteredEmployee;
  }

  getEmployeeById(employeeId: string): Employee | null {
    const employee = this.employees.find(
      (employee) => employee.id === employeeId
    );
    if (!employee) return null;
    return employee;
  }

  getAllEmployees(): Observable<any> {
    return this.http.get(API_URL.GET_ALL_EMPLOYEES);
  }

  addEmployee(body: Employee): Observable<any> {
    return this.http.post(API_URL.ADD_EMPLOYEE, body);
  }

  updateEmployee(body: Employee, employeeId: string): Observable<any> {
    return this.http.put(`${API_URL.UPDATE_EMPLOYEE}/${employeeId}`, body);
  }

  deleteEmployee(employeeId: string): Observable<any> {
    return this.http.delete(`${API_URL.DELETE_EMPLOYEE}/${employeeId}`);
  }
}
