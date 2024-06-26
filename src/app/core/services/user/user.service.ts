import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  createUser(user: any, typeUser: any) {
    return this.httpClient.post(
      `${environment.baseUrl}/${typeUser}/create`,
      user
    );
  }
}
