import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from 'src/app/shared/input/input.module';
import { LoginComponent } from './login.component';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, InputModule, ButtonModule, RouterModule],
  exports: [LoginComponent],
})
export class LoginModule {}
