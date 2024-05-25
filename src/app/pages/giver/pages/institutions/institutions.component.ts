import { Component, OnInit } from '@angular/core';
import { InstitutionResponse } from 'src/app/core/model/institution';
import { GiverService } from '../../giver.service';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.sass'],
})
export class InstitutionsComponent implements OnInit {
  constructor(private giverService: GiverService) {}
  institutions: InstitutionResponse = {} as InstitutionResponse;
  loading: boolean = true;
  placeholders: any[] = new Array(8);

  ngOnInit(): void {
    this.giverService.getInstitutions(1, 10).subscribe({
      next: (data: InstitutionResponse) => {
        this.institutions = data;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
      }
    });
  }
}
