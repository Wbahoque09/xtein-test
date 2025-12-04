import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebard',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebard.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebard {
  isRaizOpen = signal(false);

  toggleRaiz() {
    this.isRaizOpen.update((current) => !current);
  }
}
