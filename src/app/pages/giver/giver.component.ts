import { Component, OnInit } from '@angular/core';
import { GiverService } from './giver.service';
import { InstitutionResponse } from 'src/app/core/model/institution';

@Component({
  selector: 'app-giver',
  templateUrl: './giver.component.html',
  styleUrls: ['./giver.component.sass'],
})
export class GiverComponent implements OnInit {
  constructor(private giverService: GiverService) {}
  institutions: InstitutionResponse = {} as InstitutionResponse;
  ngOnInit(): void {
    this.giverService.getLatestInstitution().subscribe({
      next: (data: InstitutionResponse) => {
        this.institutions = data;
      },
    });
  }
}
