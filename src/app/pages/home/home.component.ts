import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { InstitutionResponse } from 'src/app/core/model/institution';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) {}
  institutions: InstitutionResponse = {} as InstitutionResponse;
  ngOnInit(): void {
    this.homeService.getLatestInstitution().subscribe({
      next: (data: InstitutionResponse) => {
        this.institutions = data;
      },
    });
  }
}
