import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RememberPasswordService {

  constructor(private httpClient: HttpClient) { }

  public postRememberPassword(email: string) {
    const url = `${environment.baseUrl}/mailer/forgot-password`;
    const params = new HttpParams().set('email', email);
    return this.httpClient.post(url, params);
  }

}
