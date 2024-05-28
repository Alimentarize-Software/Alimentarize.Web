import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationComponent } from './configuration.component';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/shared/components/input/input.module';

@NgModule({
  declarations: [ConfigurationComponent],
  imports: [CommonModule, ButtonModule, ReactiveFormsModule, InputModule],
  exports: [ConfigurationComponent],
})
export class ConfigurationModule {}
