import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RootMathService } from '../../services/root-math-service';

@Component({
  selector: 'app-component-second',
  imports: [],
  templateUrl: './component-second.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentSecond { 
  private mathService = inject(RootMathService);
  protected message = signal<string>('');
  protected isVisible = signal<boolean>(false);

  calc(): void {
    this.message.set(`Componente 2:Raiz(3): ${this.mathService.raiz_cuadrada(3)}`);
    this.isVisible.set(true);
  }

  reset(): void {
    this.message.set('');
    this.isVisible.set(false);
  }
}