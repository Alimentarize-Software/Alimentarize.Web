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

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    if (
      this.user.email == 'alimentarize@gmail.com' &&
      this.user.password == 'Alimentarize123'
    ) {
      console.log(this.user);
      this.loading = true;

      setTimeout(() => {
        localStorage.setItem(
          'token',
          'GDSJGLSMGOHNRO3450U2350GLKGLDLGFHSDFGY04T'
        );
        localStorage.setItem(
          'token',
          'GDSJGLSMGOHNRO3450U2350GLKGLDLGFHSDFGY04T'
        );
        this.router.navigateByUrl('/home');
        this.loading = false;
      }, 1000);
    } else {
      alert('deu ruim');
    }
  }
}
