import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent {
  @Input() message: string = '';

  constructor(private errorService: ErrorService) {}

  onNormalState() {
    this.errorService.backToNormalState();
  }
}
