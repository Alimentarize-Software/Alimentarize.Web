import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
import { LayoutImageFormsModule } from 'src/app/shared/layout/layout-image-forms/layout-image-forms.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    InputModule,
    ButtonModule,
    RouterModule,
    FormsModule,
    LayoutImageFormsModule,
  ],
  exports: [RegisterComponent],
})
export class RegisterModule {}
