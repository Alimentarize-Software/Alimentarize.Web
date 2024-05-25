import { Component, OnInit } from '@angular/core';
import { GiverService } from './giver.service';
import {
  Institution,
  InstitutionResponse,
} from 'src/app/core/model/institution';
import {
  HistoryDonation,
  HistoryDonationResponse,
} from 'src/app/core/model/historyDonation';

@Component({
  selector: 'app-giver',
  templateUrl: './giver.component.html',
  styleUrls: ['./giver.component.sass'],
})
export class GiverComponent implements OnInit {
  skeletons: any[] = new Array(8);

  constructor(private giverService: GiverService) {}
  donationHistory: HistoryDonationResponse = {} as HistoryDonationResponse;
  ngOnInit(): void {
    const object = localStorage.getItem('user');
    if (object) {
      const user: Institution = JSON.parse(object);
      this.giverService.getLatestInstitution(user?.id, 1, 10).subscribe({
        next: (data: HistoryDonationResponse) => {
          this.donationHistory = data;
          console.log('donationHistory: ', this.donationHistory);
        },
      });
    }
  }
}
