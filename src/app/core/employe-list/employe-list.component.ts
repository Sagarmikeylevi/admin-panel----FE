import { Component } from '@angular/core';
import { Error } from 'src/app/models/error';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css'],
})
export class EmployeListComponent {
  constructor(private errorService: ErrorService) {}

  get employeeError(): Error {
    return this.errorService.getError();
  }
}
