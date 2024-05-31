import { Injectable } from '@angular/core';
import { Error } from '../models/error';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private error: Error = { state: false, message: '' };

  setError(message: string) {
    this.error.state = true;
    this.error.message = message;
  }

  getError(): Error {
    return this.error;
  }

  backToNormalState() {
    this.error.state = false;
  }

  constructor() {}
}
