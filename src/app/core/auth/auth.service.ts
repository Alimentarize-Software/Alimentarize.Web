import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  public isLogin(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('entrou');
      return true;
    } else {
      this.router.navigateByUrl('**');
      return false;
    }
  }

  canActivate(currentUser: number): boolean {
    return this.isLogin();
  }
}
