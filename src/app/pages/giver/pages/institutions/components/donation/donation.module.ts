import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationComponent } from './donation.component';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { DonationRoutingModule } from './donation-routing.module';



@NgModule({
  declarations: [DonationComponent],
  imports: [
    CommonModule, DonationRoutingModule, ButtonModule
  ],
  exports: [DonationComponent],
})
export class DonationModule { }
