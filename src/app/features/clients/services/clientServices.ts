import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { enviroment } from '../../../../environments/enviroment.development';
import { HttpClient } from '@angular/common/http';
import { ClientsInterface } from '../interfaces/clients';

@Injectable({
  providedIn: 'root',
})
export class ClientServices {
  private readonly url = `${enviroment.API_BASE_CLIENTS}`;
  private http = inject(HttpClient);

  saveClient(data: ClientsInterface) {
    // const jsonString = JSON.stringify(data); conversion a string JSON
    return this.http.post<ClientsInterface>(`${this.url}`, {...data}, {
      headers: { 'Content-Type': 'application/json' },
    });
  }


}
