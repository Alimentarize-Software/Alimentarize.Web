import { Component } from '@angular/core';
import { RememberPasswordService } from './remember-password.service';
import { isValidEmail } from '../../utils/utils';

@Component({
  selector: 'app-remember-password',
  templateUrl: './remember-password.component.html',
  styleUrls: ['./remember-password.component.sass'],
})
export class RememberPasswordComponent {
  email: string = '';

  loadingButton: boolean = false;
  constructor(private rememberPasswordService: RememberPasswordService){  }

  rememberPassword(){
    this.loadingButton = true;
    this.rememberPasswordService.postRememberPassword(this.email).subscribe({
      next: (data) => {
        this.loadingButton = false;
      },
      error: (err) => {
        this.loadingButton = false;
      },
    });
  }

  sendingLoading() {
    this.loadingButton = false;
  }

  isValidEmail(): boolean {
    return isValidEmail(this.email);
  }

}
