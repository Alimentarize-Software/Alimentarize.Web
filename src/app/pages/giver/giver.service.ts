import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import mock from './mock.json';
import mock2 from './mock2.json';
import { InstitutionResponse } from 'src/app/core/model/institution';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GiverService {
  $mock = new BehaviorSubject<InstitutionResponse>({ data: [] });
  $mock2 = new BehaviorSubject<InstitutionResponse>({ data: [] });

  constructor(private router: Router) {}

  getLatestInstitution() {
    this.$mock.next(mock);

    return this.$mock;
  }

  getInstitutions() {
    this.$mock.next(mock2);

    return this.$mock;
  }
}
