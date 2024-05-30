import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee';

const EMPLOYEE_DATA: Employee[] = [
  { id: 1, name: 'Talha Anjum', position: 'Intern', salary: 15000 },
  { id: 1, name: 'Talha Anjum', position: 'Intern', salary: 15000 },
  { id: 1, name: 'Talha Anjum', position: 'Intern', salary: 15000 },
  { id: 1, name: 'Talha Anjum', position: 'Intern', salary: 15000 },
  { id: 1, name: 'Talha Anjum', position: 'Intern', salary: 15000 },
  { id: 1, name: 'Talha Anjum', position: 'Intern', salary: 15000 },
  { id: 1, name: 'Talha Anjum', position: 'Intern', salary: 15000 },
  { id: 1, name: 'Talha Anjum', position: 'Intern', salary: 15000 },
  { id: 1, name: 'Talha Anjum', position: 'Intern', salary: 15000 },
];

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css'],
})
export class EmployeListComponent {
  displayedColumns: string[] = ['id', 'name', 'position', 'salary'];
  dataSource = EMPLOYEE_DATA;
}
