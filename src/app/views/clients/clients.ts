import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormClient } from '../../features/clients/components/form-client/form-client';

@Component({
  selector: 'app-clients',
  imports: [FormClient],
  templateUrl: './clients.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Clients { }
