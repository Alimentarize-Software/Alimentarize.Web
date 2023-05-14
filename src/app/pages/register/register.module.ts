import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from 'src/app/shared/input/input.module';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, InputModule, ButtonModule, RouterModule],
  exports: [RegisterComponent],
})
export class RegisterModule {}
