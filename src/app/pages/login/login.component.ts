import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { User } from 'src/app/core/types/user';

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
        setTimeout(() => {
          localStorage.setItem('token', data.token);
          this.router.navigateByUrl('/');
          this.loading = false;
        }, 2000);
      },
      error: (err) => {
        console.log('Deu ruim');
        this.loadingButton = false;
      },
    });
  }
}
