import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateDonation } from '../../model/donation';

@Injectable({
  providedIn: 'root',
})
export class DonationService {
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  createDonation(payload: CreateDonation) {
    return this.httpClient.post(`${this.baseUrl}/donation/create`, payload);
  }
}
