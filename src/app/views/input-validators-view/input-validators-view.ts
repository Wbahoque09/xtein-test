import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputValidators } from '../../features/input-validators/components/inputValidators/inputValidators';

@Component({
  selector: 'app-input-validators-view',
  imports: [InputValidators],
  templateUrl: './input-validators-view.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputValidatorsView { }
