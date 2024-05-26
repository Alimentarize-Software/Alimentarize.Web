import { Component, OnInit } from '@angular/core';
import { GiverService } from './giver.service';
import { InstitutionResponse } from 'src/app/core/model/institution';
import { DonationItem, PaginationResponse } from 'src/app/core/model/paginationResponse.interface';

@Component({
  selector: 'app-giver',
  templateUrl: './giver.component.html',
  styleUrls: ['./giver.component.sass'],
})
export class GiverComponent implements OnInit {
  constructor(private giverService: GiverService) {}
  institutions: InstitutionResponse = {} as InstitutionResponse;
  donations: DonationItem[] = [];
  userID: number;
  currentPage: number = 1;
  totalPages: number;
  
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
      }
    });
  }

  onPageChange(page: number): void {
    this.allDonations(page);
  }

  latestInstitution() {
    this.giverService.getLatestInstitution().subscribe({
      next: (data: InstitutionResponse) => {
        this.institutions = data;
        // console.log('RES: ', this.institutions);
      }
    });
  }
}
