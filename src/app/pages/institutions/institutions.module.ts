import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutionsRoutingModule } from './institutions-routing.module';
import { InstitutionsComponent } from './institutions.component';
import { LeftBarModule } from 'src/app/shared/left-bar/left-bar.module';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { CardInstitutionModule } from 'src/app/shared/card-institution/card-institution.module';

@NgModule({
  declarations: [InstitutionsComponent],
  imports: [
    CommonModule,
    InstitutionsRoutingModule,
    LeftBarModule,
    HeaderModule,
    CardInstitutionModule,
  ],
  exports: [InstitutionsComponent],
})
export class InstitutionsModule {}
