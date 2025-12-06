import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootMathService {

  raiz_cuadrada(number: number): number {
    return Math.sqrt(number);
  }

}
