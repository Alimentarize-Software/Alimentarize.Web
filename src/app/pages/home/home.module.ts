import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardModule } from 'src/app/shared/card/card.module';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { CardInstitutionModule } from 'src/app/shared/card-institution/card-institution.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    TableModule,
    CardInstitutionModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
