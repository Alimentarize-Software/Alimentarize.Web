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
import {
  DonationItem,
  PaginationResponse,
} from 'src/app/core/model/paginationResponse.interface';
import { TotalDonation } from 'src/app/core/model/totalDonation';
import { CarouselResponsiveOptions } from 'primeng/carousel';

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
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    autoplay: true,
    rewind: true,
  };

  skeletons: any[] = new Array(8);

  constructor(
    private giverService: GiverService,
    private renderer: Renderer2
  ) {}
  donationHistory: HistoryDonationResponse = {} as HistoryDonationResponse;
  institutions: InstitutionResponse = {} as InstitutionResponse;
  donations: DonationItem[] = [];
  userID: number;
  currentPage: number = 1;
  totalPages: number;
  totalDonation: TotalDonation = {} as TotalDonation;
  // responsiveOptions: CarouselResponsiveOptions[] = {}

  ngAfterViewInit(): void {
    this.renderer.listen('document', 'DOMContentLoaded', () => {
      console.log('ready');
    });
  }

  ngOnInit(): void {
    const user = localStorage.getItem('user');

    if (user) {
      const parsedUser = JSON.parse(user);

      if (parsedUser && parsedUser.id) {
        this.userID = parsedUser.id;
      } else {
        console.error('O usuário no localStorage não tem um ID válido.');
      }
    } else {
      console.error('Não há usuário armazenado no localStorage.');
    }

    this.latestInstitution();

    this.allDonations();

    this.giverService.getTotalDonations(this.userID).subscribe((data) => {
      this.totalDonation = data;
    });
  }

  allDonations(page: number = 1) {
    this.giverService.getAllDonations(this.userID, page).subscribe({
      next: (response: PaginationResponse) => {
        const { data } = response;
        console.log('DATA: ', data);
        console.log('RESPONSE: ', response);
        this.donations = data.donations;
        this.currentPage = page;
        this.totalPages = data.totalPages;
      },
    });
  }

  onPageChange(page: number): void {
    this.allDonations(page);
  }

  latestInstitution() {
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
}
