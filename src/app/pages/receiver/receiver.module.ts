import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceiverComponent } from './receiver.component';
import { LeftBarModule } from 'src/app/shared/components/left-bar/left-bar.module';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';

@NgModule({
  declarations: [ReceiverComponent],
  imports: [
    CommonModule,
    LeftBarModule,
    HeaderModule,
    CardModule,
    ButtonModule,
  ],
  exports: [ReceiverComponent],
})
export class ReceiverModule {}
