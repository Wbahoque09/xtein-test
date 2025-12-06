import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootMathService } from '../../services/root-math-service';

@Component({
  selector: 'app-component-one',
  imports: [CommonModule],
  templateUrl: './component-one.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentOne {
  private mathService = inject(RootMathService);
  protected message = signal<string>('');
  protected isVisible = signal<boolean>(false);

  calc(): void {
    this.message.set(`Componente 1:Raiz(2): ${this.mathService.raiz_cuadrada(2)}`);
    this.isVisible.set(true);
  }

  reset(): void {
    this.message.set('');
    this.isVisible.set(false);
  }
}
