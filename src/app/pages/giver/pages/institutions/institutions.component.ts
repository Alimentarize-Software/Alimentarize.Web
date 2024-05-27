import { Component, OnInit } from '@angular/core';
import { InstitutionResponse } from 'src/app/core/model/institution';
import { GiverService } from '../../giver.service';
import { InstitutionsService } from './institutions.service';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.sass'],
})
export class InstitutionsComponent implements OnInit {
  constructor(
    private giverService: GiverService,
    private institutionsService: InstitutionsService
  ) {}
  institutions: InstitutionResponse = {} as InstitutionResponse;
  loading: boolean = true;
  skeletons: any[] = new Array(8);
  filters: any;

  ngOnInit(): void {
    this.giverService.getInstitutions(1, 10).subscribe({
      next: (data: InstitutionResponse) => {
        this.institutions = data;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
      },
    });

    this.institutionsService.getFilter().subscribe({
      next: (filters) => {
        this.filters = filters;
      },
      error: (err) => {
        console.error('Error fetching filters:', err);
      }
    });
  }
}
