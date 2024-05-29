import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  Categories,
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

  getInstitutions(page: number, limit: number, categorias?: string[]) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());
    if (categorias && categorias.length > 0) {
      const array = categorias.join(',');
      // categorias.forEach((categorias) => {
      //   params = params.append('categories', array);
      // });
      params = params.append('categories', array);
    }

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
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("id", data.id);
    formData.append("cep", data.cep);
    formData.append("receiverId", data.receiverId);
    formData.append("neighborhood", data.neighborhood);
    formData.append("address", data.address);
    formData.append("city", data.city);
    formData.append("state", data.state);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("email", data.email);
    formData.append("image", data.image);
    return this.httpClient.post(
      `${this.baseUrl}/donor/update-donor-infos`,
      data
    );
  }

  getDonorInfo(id: number) {
    return this.httpClient.get<any>(`${this.baseUrl}/donor/${id}`);
  }

  getAllCategories() {
    return this.httpClient.get<Categories[]>(
      `${this.baseUrl}/category/get-all-categories`
    );
  }
}
