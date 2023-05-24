import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { LeftBarModule } from 'src/app/shared/left-bar/left-bar.module';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { TableModule } from 'src/app/shared/table/table.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    LeftBarModule,
    HeaderModule,
    CardModule,
    ButtonModule,
    TableModule,
  ],
  exports: [MainComponent],
})
export class MainModule {}
