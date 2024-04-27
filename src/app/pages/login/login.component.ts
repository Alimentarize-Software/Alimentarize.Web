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
        localStorage.setItem('token', data.token);
        localStorage.setItem('typeUser', 'donor');

        let typeUser = localStorage.getItem('typeUser');
        if (typeUser === 'donor') {
          console.log('Doador');
          this.router.navigateByUrl('doador');
        } else if (typeUser === 'institution') {
          console.log('instituicao');
          this.router.navigateByUrl('instituicao');
        }

        this.loading = false;
      },
      error: (err) => {
        this.loadingButton = false;
      },
    });
  }
}
