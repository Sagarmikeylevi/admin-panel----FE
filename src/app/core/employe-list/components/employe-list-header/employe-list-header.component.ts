import { Component } from '@angular/core';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-employe-list-header',
  templateUrl: './employe-list-header.component.html',
  styleUrls: ['./employe-list-header.component.css'],
})
export class EmployeListHeaderComponent {
  searchQuery: string = '';

  constructor(private employeService: EmployeService) {}

  onSearch() {
    setTimeout(() => {
      this.employeService.serachEmployees(this.searchQuery);
    }, 300);
  }
}
