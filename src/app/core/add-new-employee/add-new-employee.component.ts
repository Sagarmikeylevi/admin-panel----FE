import { Component } from '@angular/core';
import { Error } from 'src/app/models/error';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.css'],
})
export class AddNewEmployeeComponent {
  type: string = 'Add';
  constructor(private errorService: ErrorService) {}

  get formError(): Error {
    return this.errorService.getError();
  }
}
