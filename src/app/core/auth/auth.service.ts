import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { AuthResponse } from '../model/user';

type UserType = 'donor' | 'receiver';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private httpClient: HttpClient) {}

  public isLogin(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }

  public auth(user: any) {
    return this.httpClient.post<AuthResponse>(
      `${environment.baseUrl}/auth/login`,
      user
    );
  }

  canActivate(currentUser: number): boolean {
    return this.isLogin();
  }

  getInfoUser(type: string, id: number) {
    const endpoint = type === 'receiver' ? 'receiver' : 'donor';
    return this.httpClient.get(`${environment.baseUrl}/${endpoint}/${id}`);
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
