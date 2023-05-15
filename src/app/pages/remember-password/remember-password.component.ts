import { Component } from '@angular/core';

@Component({
  selector: 'app-remember-password',
  templateUrl: './remember-password.component.html',
  styleUrls: ['./remember-password.component.sass'],
})
export class RememberPasswordComponent {
  email: string = '';
}
