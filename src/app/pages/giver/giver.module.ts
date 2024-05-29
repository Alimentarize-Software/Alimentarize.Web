import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiverRoutingModule } from './giver-routing.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { CardInstitutionModule } from 'src/app/shared/components/card-institution/card-institution.module';
import { GiverComponent } from './giver.component';
import { MyProfileModule } from '../my-profile/my-profile.module';
import { SkeletonModule } from 'src/app/shared/components/skeleton/skeleton.module';
import { CarouselModule } from 'src/app/shared/components/carousel/carousel.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [GiverComponent],
  imports: [
    CommonModule,
    GiverRoutingModule,
    CardModule,
    ButtonModule,
    TableModule,
    CardInstitutionModule,
    MyProfileModule,
    SkeletonModule,
    CarouselModule,
    SwiperModule,
  ],
  exports: [GiverComponent],
})
export class GiverModule {}
