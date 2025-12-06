import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-validators',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './inputValidators.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputValidators {
  protected num = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[0-9]+$/),
    // Validators.pattern(/^\d+$/),
  ]);


  cleanForm() {
    this.num.reset('');
  }

  // Maneja la entrada para filtrar caracteres no numéricos en tiempo real
  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value || '';
    const sanitized = value.replace(/\D+/g, '');
    if (sanitized !== value) {
      // Actualiza el control sin emitir eventos extra
      this.num.setValue(sanitized, { emitEvent: false });
    }
  }
}
