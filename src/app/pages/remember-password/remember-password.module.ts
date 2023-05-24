import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RememberPasswordComponent } from './remember-password.component';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from 'src/app/shared/loading/loading.module';
import { InputModule } from 'src/app/shared/input/input.module';

@NgModule({
  declarations: [RememberPasswordComponent],
  imports: [
    CommonModule,
    InputModule,
    ButtonModule,
    RouterModule,
    FormsModule,
    LoadingModule,
    ButtonModule,
  ],
  exports: [RememberPasswordComponent],
})
export class RememberPasswordModule {}