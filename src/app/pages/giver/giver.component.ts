import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { GiverService } from './giver.service';
import {
  Institution,
  InstitutionResponse,
} from 'src/app/core/model/institution';
import {
  HistoryDonation,
  HistoryDonationResponse,
} from 'src/app/core/model/historyDonation';
import { OwlOptions, CarouselComponent } from 'ngx-owl-carousel-o';

declare var $: any;

@Component({
  selector: 'app-giver',
  templateUrl: './giver.component.html',
  styleUrls: ['./giver.component.sass'],
})
export class GiverComponent implements OnInit {
  @ViewChild('owlCarousel', { static: false }) owlCarousel: CarouselComponent;
  customOptions: OwlOptions = {
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    autoplay: true,
    rewind: true,
  }
  
  skeletons: any[] = new Array(8);

  constructor(private giverService: GiverService, private renderer: Renderer2) {}
  donationHistory: HistoryDonationResponse = {} as HistoryDonationResponse;
  ngOnInit(): void {
    const object = localStorage.getItem('user');
    if (object) {
      const user: Institution = JSON.parse(object);
      this.giverService.getLatestInstitution(user?.id, 1, 10).subscribe({
        next: (data: HistoryDonationResponse) => {
          this.donationHistory = data;
          // console.log('donationHistory: ', this.donationHistory);
        },
      });
    }
  }

  ngAfterViewInit(): void {
    this.renderer.listen('document', 'DOMContentLoaded', () => {
      console.log('ready');
    });
    console.log('owlCarousel: ', this.owlCarousel);
    if (this.owlCarousel) {
      // this.owlCarousel.refresh();
    }
  }
}
