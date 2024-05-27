import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile.component';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MyProfileComponent],
  imports: [
    CommonModule,
    ButtonModule,
    InputModule,
    ReactiveFormsModule,
  ],
  exports: [MyProfileComponent]
})
export class MyProfileModule { }
