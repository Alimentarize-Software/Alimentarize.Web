import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationComponent } from './donation.component';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { DonationRoutingModule } from './donation-routing.module';
import { InputModule } from "../../../../../../shared/components/input/input.module";



@NgModule({
    declarations: [DonationComponent],
    exports: [DonationComponent],
    imports: [
        CommonModule, DonationRoutingModule, ButtonModule,
        InputModule
    ]
})
export class DonationModule { }
