import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionComponent } from './institution.component';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { InstitutionRoutingModule } from './institution-routing.module';
import { SkeletonModule } from 'src/app/shared/components/skeleton/skeleton.module';

@NgModule({
  declarations: [InstitutionComponent],
  imports: [
    CommonModule,
    InstitutionRoutingModule,
    ButtonModule,
    SkeletonModule,
  ],
  exports: [InstitutionComponent],
})
export class InstitutionModule {}
