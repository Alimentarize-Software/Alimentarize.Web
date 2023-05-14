import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public isLogin(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    }

    return false;
  }
}
