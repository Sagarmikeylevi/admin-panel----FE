import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../app.contants';
import { Admin } from '../models/admin';
import { Error } from '../models/error';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  login(body: Admin): Observable<any> {
    return this.http.post(API_URL.LOGIN, body);
  }
}
