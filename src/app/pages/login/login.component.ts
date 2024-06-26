import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { User } from 'src/app/core/types/user';
import { isValidEmail } from '../../utils/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  user: User = {
    email: '',
    password: '',
  };

  loading: boolean = false;
  loadingButton: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.loadingButton = true;
    this.authService.auth(this.user).subscribe({
      next: (data) => {
        this.loading = true;
        localStorage.setItem('token', data.token);

        if (data.type === 'donor') {
          this.authService.getInfoUser('donor', data.id).subscribe({
            next: (data) => {
              localStorage.setItem('typeUser', 'donor');
              localStorage.setItem('user', JSON.stringify(data));
              this.router.navigateByUrl('doador/home');
            },
          });
        } else if (data.type === 'receiver') {
          this.authService.getInfoUser('receiver', data.id).subscribe({
            next: (data) => {
              localStorage.setItem('typeUser', 'receiver');
              localStorage.setItem('user', JSON.stringify(data));
              this.router.navigateByUrl('instituicao/home');
            },
          });
        }
        this.loading = false;
      },
      error: (err) => {
        this.loadingButton = false;
      },
    });
  }

  isValidEmail(): boolean {
    return isValidEmail(this.user.email);
  }
}
