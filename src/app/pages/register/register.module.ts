import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutImageFormsModule } from 'src/app/shared/layout/layout-image-forms/layout-image-forms.module';
import { DateMaskPipe } from 'src/app/utils/date-mask.pipe';
import { PhonePipe } from 'src/app/utils/phone.pipe';
import { CnpjPipe } from 'src/app/utils/cnpj.pipe';

@NgModule({
  declarations: [RegisterComponent, CnpjPipe, PhonePipe, DateMaskPipe],
  imports: [
    CommonModule,
    InputModule,
    ButtonModule,
    RouterModule,
    FormsModule,
    LayoutImageFormsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [RegisterComponent],
})
export class RegisterModule {}
