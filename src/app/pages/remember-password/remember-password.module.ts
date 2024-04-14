import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RememberPasswordComponent } from './remember-password.component';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { LayoutImageFormsModule } from 'src/app/shared/layout/layout-image-forms/layout-image-forms.module';

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
    LayoutImageFormsModule,
  ],
  exports: [RememberPasswordComponent],
})
export class RememberPasswordModule {}
