import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root-math',
  imports: [RouterOutlet],
  templateUrl: './root-math.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RootMath { }
