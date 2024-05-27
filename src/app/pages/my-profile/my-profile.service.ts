import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Institution } from 'src/app/core/model/institution';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyProfileService {
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  getInstitution(receiverId: string) {
    return this.httpClient.get<Institution>(
      `${this.baseUrl}/receiver/get-about/${receiverId}`
    );
  }
}
