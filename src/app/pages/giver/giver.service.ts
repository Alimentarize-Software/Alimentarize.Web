import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  Institution,
  InstitutionResponse,
} from 'src/app/core/model/institution';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HistoryDonationResponse } from 'src/app/core/model/historyDonation';
import { PaginationResponse } from 'src/app/core/model/paginationResponse.interface';
import { TotalDonation } from 'src/app/core/model/totalDonation';

@Injectable({
  providedIn: 'root',
})
export class GiverService {
  $mock = new BehaviorSubject<any>({ data: [] });
  $mock2 = new BehaviorSubject<any>({ data: [] });
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  getInstitution(receiverId: string | number) {
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
  getAllDonations(
    id: number,
    page: number = 1,
    limit: number = 6
  ): Observable<PaginationResponse> {
    return this.httpClient.get<PaginationResponse>(
      `${this.baseUrl}/donation/history/donor/${id}?page=${page}&limit=${limit}`
    );
  }

  getTotalDonations(id: number) {
    return this.httpClient.get<TotalDonation>(
      `${this.baseUrl}/donation/total-donations/${id}`
    );
  }

  updateMyProfile(data: any) {
    return this.httpClient.post(`${this.baseUrl}/donor/update-donor-infos`, data);
  }

  getDonorInfo(id: number) {
    return this.httpClient.get(`${this.baseUrl}/donor/${id}`);
  }
}
