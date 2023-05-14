import { Component } from '@angular/core';
import { User } from 'src/app/core/types/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  user: User;
}
