import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { PaginationResponse } from 'src/app/core/model/paginationResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class ReceiverService {
  $mock = new BehaviorSubject<any>({ data: [] });
  $mock2 = new BehaviorSubject<any>({ data: [] });
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  getAllDonationsSchedulePage(
    id: number,
    page: number = 1,
    limit: number = 6
  ): Observable<PaginationResponse> {
    return this.httpClient.get<PaginationResponse>(
      `${this.baseUrl}/donation/history/receiver/${id}?page=${page}&limit=${limit}&status=PENDENTE`
    );
  }

  getAllDonationsHistoryPage(
    id: number,
    page: number = 1,
    limit: number = 6
  ): Observable<PaginationResponse> {
    return this.httpClient.get<PaginationResponse>(
      `${this.baseUrl}/donation/history/receiver/${id}?page=${page}&limit=${limit}&status=APROVADO&status=REPROVADO`
    );
  }

  updateDonationStatus(id: number, status: string): Observable<void> {
    const body = {
      donationId: id,
      status,
    };
    return this.httpClient.post<void>(
      `${environment.baseUrl}/donation/update-status`,
      body
    );
  }

  updateMyProfile(data: any) {
    return this.httpClient.post(
      `${this.baseUrl}/receiver/update-receiver-infos`,
      data
    );
  }

  getReceiverInfo(id: number) {
    return this.httpClient.get(`${this.baseUrl}/receiver/${id}`);
  }

  updateReceiverAbout(data: any) {
    return this.httpClient.post(`${this.baseUrl}/receiver/create-update-about`, data);
  }

  updateReceiverCategories(data: any) {
    return this.httpClient.post(`${this.baseUrl}/receiver/update-categories`, data);
  }

  updateProject(data: any) {
    return this.httpClient.post(`${this.baseUrl}/receiver/update-create-about-project`, data);
  }

  getAllCategories() {
    return this.httpClient.get(`${this.baseUrl}/category/get-all-categories`);
  }

  getAllAbout(id: number) {
    return this.httpClient.get(`${this.baseUrl}/receiver/get-about/${id}`);
  }
}
