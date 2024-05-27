import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionsRoutingModule } from './institutions-routing.module';
import { InstitutionsComponent } from './institutions.component';
import { LeftBarModule } from 'src/app/shared/components/left-bar/left-bar.module';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { CardInstitutionModule } from 'src/app/shared/components/card-institution/card-institution.module';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { SkeletonModule } from 'src/app/shared/components/skeleton/skeleton.module';

@NgModule({
  declarations: [InstitutionsComponent],
  imports: [
    CommonModule,
    InstitutionsRoutingModule,
    LeftBarModule,
    HeaderModule,
    CardInstitutionModule,
    BreadcrumbModule,
    SkeletonModule
  ],
  exports: [InstitutionsComponent],
})
export class InstitutionsModule {}
