import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import mock from './mock.json';
import mock2 from './mock2.json';
import {
  Institution,
  InstitutionResponse,
} from 'src/app/core/model/institution';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class GiverService {
  $mock = new BehaviorSubject<InstitutionResponse>({ data: [] });
  $mock2 = new BehaviorSubject<InstitutionResponse>({ data: [] });
  baseUrl = environment.baseUrl;

  constructor(private router: Router, private httpClient: HttpClient) {}

  getLatestInstitution() {
    this.$mock.next(mock);

    return this.$mock;
  }

  getInstitution(receiverId: string) {
    return this.httpClient.get<Institution>(
      `${this.baseUrl}/receiver/get-about/${receiverId}`
    );
  }

  getInstitutions(page: number, limit: number) {
    // this.$mock.next(mock2);

    // return this.$mock;

    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.httpClient.get<InstitutionResponse>(
      `${this.baseUrl}/receiver/get-receivers/`,
      {
        params,
      }
    );
  }
}
