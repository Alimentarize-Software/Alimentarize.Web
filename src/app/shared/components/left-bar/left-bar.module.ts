import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftBarComponent } from './left-bar.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [LeftBarComponent],
  imports: [CommonModule, RouterModule, ButtonModule],
  exports: [LeftBarComponent],
})
export class LeftBarModule {}
