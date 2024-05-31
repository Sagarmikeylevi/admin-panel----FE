import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.contants';
import { Observable } from 'rxjs';
import { Error } from '../models/error';

@Injectable({
  providedIn: 'root',
})
export class EmployeService {
  private employees: Employee[] = [];
  private filteredEmployee: Employee[] = [];

  constructor(private http: HttpClient) {}

  serachEmployees(query: string) {
    if (!query) {
      this.filteredEmployee = this.employees;
    } else {
      this.filteredEmployee = this.employees.filter(
        (employee) =>
          employee.id === query ||
          employee.name.toLowerCase() === query.toLowerCase() ||
          employee.position.toLowerCase() === query.toLowerCase()
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

  getAllEmployees(): Observable<any> {
    return this.http.get(API_URL.GET_ALL_EMPLOYEES);
  }

  addEmployee(body: Employee): Observable<any> {
    return this.http.post(API_URL.ADD_EMPLOYEE, body);
  }
}
