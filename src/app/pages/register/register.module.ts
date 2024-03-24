import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from 'src/app/shared/input/input.module';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, InputModule, ButtonModule, RouterModule, FormsModule],
  exports: [RegisterComponent],
})
export class RegisterModule {}
