import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionComponent } from './institution.component';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { InstitutionRoutingModule } from './institution-routing.module';

@NgModule({
  declarations: [InstitutionComponent],
  imports: [CommonModule, InstitutionRoutingModule, ButtonModule],
  exports: [InstitutionComponent],
})
export class InstitutionModule {}
