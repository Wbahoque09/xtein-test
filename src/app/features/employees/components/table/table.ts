import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employees } from '../../services/employees';
import { IEmployees } from '../../models/iemployees';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Table implements OnInit {
  employeeService= inject(Employees);
  private router = inject(Router);

  ngOnInit() {
    this.employees();
  }

   employees(): void {
    this.employeeService.getEmployeesData();
  }

  get employeesList(): IEmployees[] {
    return this.employeeService.employeesResponse();
  }

  navigateToDetails(id: number): void {
    this.router.navigate(['/employees/details', id]);
  }

}
