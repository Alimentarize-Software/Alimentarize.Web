import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { LoadingModule } from '../loading/loading.module';
import { LoadingSolidModule } from '../loading-solid/loading-solid.module';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, LoadingSolidModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
