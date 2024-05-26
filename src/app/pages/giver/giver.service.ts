import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import mock from './mock.json';
import {
  Institution,
  InstitutionResponse,
} from 'src/app/core/model/institution';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PaginationResponse } from 'src/app/core/model/paginationResponse.interface';
@Injectable({
  providedIn: 'root',
})
export class GiverService {
  $mock = new BehaviorSubject<InstitutionResponse>({ data: [] });
  $mock2 = new BehaviorSubject<InstitutionResponse>({ data: [] });
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

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

  getAllDonations(id: number, page: number = 1, limit: number = 6): Observable<PaginationResponse> {
    return this.httpClient.get<PaginationResponse>(
      `${this.baseUrl}/donation/history/donor/${id}?page=${page}&limit=${limit}`);
  }
}
