import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Filters } from 'src/app/core/model/filter';

export class InstitutionsService {
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  getFilter() {
    return this.httpClient.get<Filters>(
      `${this.baseUrl}/category/get-all-categories`
    );
  }
}
