import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { ResponseProducts } from '../models/iproducts';
import { enviroment } from '../../../../environments/enviroment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly url = `${enviroment.API_BASE}`;
  private http = inject(HttpClient);
  readonly products: WritableSignal<ResponseProducts[] | null> = signal<
    ResponseProducts[] | null
  >(null);

   getAllProducts(): Observable<ResponseProducts[]> {
    return this.http.get<ResponseProducts[]>(`${this.url}/products`);
  }

}
