import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { LoginComponent } from './login.component';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';
import { LayoutImageFormsComponent } from 'src/app/shared/layout/layout-image-forms/layout-image-forms.component';
import { LayoutImageFormsModule } from 'src/app/shared/layout/layout-image-forms/layout-image-forms.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    InputModule,
    ButtonModule,
    RouterModule,
    FormsModule,
    LoadingModule,
    LayoutImageFormsModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
