import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Sidebard } from '../sidebard/sidebard';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [Sidebard, RouterOutlet],
  templateUrl: './layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Layout { }
