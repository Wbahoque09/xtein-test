import { inject, Injectable, signal } from '@angular/core';
import { enviroment } from '../../../../environments/enviroment.development';
import { DataJSONModelResponse } from '../models/idatapublic';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataPublicServices {
  private readonly url = `${enviroment.API_BASE_DATA_PUBLIC}`;
  private http = inject(HttpClient);
  readonly dataTable = signal<DataJSONModelResponse|null>(null);

  getDataTable(): Observable<DataJSONModelResponse> {
    return this.http.get<DataJSONModelResponse>(`${this.url}`);
  }

}
