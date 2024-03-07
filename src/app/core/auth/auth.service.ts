import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private httpClient: HttpClient) {}

  public isLogin(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('entrou');
      return true;
    } else {
      this.router.navigateByUrl('');
      return false;
    }
  }

  public auth(user: any) {
    return this.httpClient.post('http://localhost:3000/users', user);
  }

  canActivate(currentUser: number): boolean {
    return this.isLogin();
  }
}
