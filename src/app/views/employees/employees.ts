import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Table } from '../../features/employees/components/table/table';

@Component({
  selector: 'app-employees',
  imports: [Table],
  templateUrl: './employees.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Employees { }
