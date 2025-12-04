import { ChangeDetectionStrategy, Component, inject, input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployees } from '../../features/employees/models/iemployees';
import { Employees } from '../../features/employees/services/employees';

@Component({
  selector: 'app-employees-details',
  imports: [CommonModule],
  templateUrl: './employees-details.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesDetails implements OnInit {
  public id = input<number>();
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private employeeService = inject(Employees);

  readonly employeeDetail = signal<IEmployees | null>(null);

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = this.id();
      if (id) {
        const employees = this.employeeService.employeesResponse();
        const employee = employees.find((emp: any) => emp.id === Number(id));
        if (!employee) {
          this.goBack();
        }
        this.employeeDetail.set(employee!);
      }
    });
  }

  goBack() {
    this.router.navigate(['/employees']);
  }
}
