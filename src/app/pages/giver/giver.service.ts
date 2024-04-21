import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import mock from './mock.json';
import { InstitutionResponse } from 'src/app/core/model/institution';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GiverService {
  $mock = new BehaviorSubject<InstitutionResponse>({ data: [] });

  constructor(private router: Router) {}

  getLatestIntitution() {
    this.$mock.next(mock);

    return this.$mock;
  }
}
