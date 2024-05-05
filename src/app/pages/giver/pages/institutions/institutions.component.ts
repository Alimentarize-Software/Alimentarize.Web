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
  ngOnInit(): void {
    this.giverService.getInstitutions().subscribe({
      next: (data: InstitutionResponse) => {
        this.institutions = data;
      },
    });
  }
}
