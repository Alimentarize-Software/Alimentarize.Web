import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  Institution,
  InstitutionResponse,
} from 'src/app/core/model/institution';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  HistoryDonation,
  HistoryDonationResponse,
} from 'src/app/core/model/historyDonation';
@Injectable({
  providedIn: 'root',
})
export class GiverService {
  $mock = new BehaviorSubject<any>({ data: [] });
  $mock2 = new BehaviorSubject<any>({ data: [] });
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

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

  getLatestInstitution(donorId: number, page: number, limit: number) {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.httpClient.get<HistoryDonationResponse>(
      `${this.baseUrl}/donation/history/donor/${donorId}`,
      {
        params,
      }
    );
  }
}
