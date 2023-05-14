import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftBarComponent } from './left-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LeftBarComponent],
  imports: [CommonModule, RouterModule],
  exports: [LeftBarComponent],
})
export class LeftBarModule {}
