import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile.component';
import { ButtonModule } from 'src/app/shared/components/button/button.module';



@NgModule({
  declarations: [MyProfileComponent],
  imports: [
    CommonModule,
    ButtonModule,
  ],
  exports: [MyProfileComponent]
})
export class MyProfileModule { }
