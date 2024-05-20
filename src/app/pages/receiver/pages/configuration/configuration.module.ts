import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationComponent } from './configuration.component';
import { ButtonModule } from 'src/app/shared/components/button/button.module';

@NgModule({
  declarations: [ConfigurationComponent],
  imports: [CommonModule, ButtonModule],
  exports: [ConfigurationComponent],
})
export class ConfigurationModule {}
