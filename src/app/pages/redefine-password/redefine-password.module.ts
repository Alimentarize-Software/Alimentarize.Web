import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedefinePasswordComponent } from './redefine-password.component';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from 'src/app/shared/loading/loading.module';
import { InputModule } from 'src/app/shared/input/input.module';

@NgModule({
  declarations: [RedefinePasswordComponent],
  imports: [
    CommonModule,
    InputModule,
    ButtonModule,
    RouterModule,
    FormsModule,
    LoadingModule,
    ButtonModule,
  ],
  exports: [RedefinePasswordComponent],
})
export class RedefinePasswordModule {}
