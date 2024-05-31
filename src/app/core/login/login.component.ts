import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { Error } from 'src/app/models/error';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hide: boolean = true;
  loading: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}

  get authError(): Error {
    return this.authService.getAuthError();
  }

  onSubmit(f: NgForm) {
    this.loading = true;
    const body: Admin = f.form.value;
    this.authService.login(body).subscribe(
      (res) => {
        this.authService.setToken(res.access_token);
        this.loading = false;
        this.router.navigateByUrl('/');
      },
      (error) => {
        this.authService.setAuthError(
          'Unauthorized, only admins can access this page.'
        );
        this.loading = false;
      }
    );
  }

  changeHide() {
    this.hide = !this.hide;
  }
}
