import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent {
  @Input() message: string = '';

  constructor(private authService: AuthService) {}

  onNormalState() {
    this.authService.backToNormalState();
  }
}
