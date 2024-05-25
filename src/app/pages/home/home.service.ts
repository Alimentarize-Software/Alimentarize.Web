import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import mock from './mock.json';
import { InstitutionResponse } from 'src/app/core/model/institution';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  $mock = new BehaviorSubject<any>({ data: [] });

  constructor(private router: Router) {}

  getLatestInstitution() {
    this.$mock.next(mock);

    return this.$mock;
  }
}
