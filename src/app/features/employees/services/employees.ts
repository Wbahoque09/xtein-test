import { Injectable, signal } from '@angular/core';
import { IEmployees } from '../models/iemployees';
import { employeesData } from '../../../data/employees';

@Injectable({
  providedIn: 'root'
})
export class Employees {

  readonly employeesResponse = signal<IEmployees[]>([]);

  getEmployeesData() {
    return this.employeesResponse.set(employeesData);
  }

}
